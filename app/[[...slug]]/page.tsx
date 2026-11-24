import EventSphere from '@/components/EventSphere';

export function generateStaticParams() {
  const eventIds = [
    'bharat-mobility', 'mumbai-design', 'sunburn',
    'food-forward', 'startup-summit', 'art-week',
    ...Array.from({ length: 18 }, (_, i) => `city-event-${i + 1}`),
  ];

  return [
    { slug: [] },
    { slug: ['events'] },
    { slug: ['ai-planner'] },
    { slug: ['marketplace'] },
    { slug: ['promote'] },
    { slug: ['admin'] },
    ...['visitor', 'organizer', 'exhibitor', 'provider'].map(
      role => ({ slug: ['dashboard', role] }),
    ),
    ...eventIds.map(id => ({ slug: ['events', id] })),
  ];
}

export default function Page() {
  return <EventSphere />;
}
