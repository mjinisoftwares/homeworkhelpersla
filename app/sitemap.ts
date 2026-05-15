import { MetadataRoute } from 'next';
import servicesData from '@/lib/db/services.json';

interface Service {
  slug: string;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://homeworkhelpersla.com';

  const services = (servicesData as Service[]).map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    ...services,
  ];
}
