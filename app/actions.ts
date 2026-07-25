"use server";

import { Resend } from "resend";
import * as z from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

export type FormState = {
	success?: boolean;
	error?: string;
	message?: string;
};

export async function submitOrderForm(
	_prevState: FormState,
	formData: FormData,
): Promise<FormState> {
	try {
		const formSchema = z.object({
			service: z.string().optional(),
			level: z.string().optional(),
			subject: z.string().optional(),
			urgency: z.string().optional(),
			quantity: z.string().optional(),
			email: z.string().email(),
			details: z.string().min(1),
		});

		const { data, success } = formSchema.safeParse(
			Object.fromEntries(formData.entries()),
		);
		
		if (!success) {
			return {
				success: false,
				error: "Please enter a valid email address and details.",
			};
		}

		const messageBody = `New Order Request:\n- Service: ${data.service || "Not specified"}\n- Academic Level: ${data.level || "Not specified"}\n- Urgency: ${data.urgency || "Not specified"}\n- Subject: ${data.subject || "Not specified"}\n- Quantity (Pages/Words/etc): ${data.quantity || "Not specified"}\n- Email: ${data.email}\n\nDetails: \n${data.details}`;

		const { error } = await resend.emails.send({
			from: "info@homeworkdoers.help",
			to: ["myhomeworkdoers@gmail.com"],
			subject: `New Order Request - ${data.service || "Homework Help"}`,
			text: messageBody,
			replyTo: data.email,
		});

		if (error) {
			console.error("Resend error:", error);
			return {
				success: false,
				error: "Failed to send email. Please try again.",
			};
		}

		return {
			success: true,
			message: "Success! Order request sent. We'll get back to you soon.",
		};
	} catch (error) {
		console.error("Server action error:", error);
		return {
			success: false,
			error: "Something went wrong. Please try again.",
		};
	}
}
