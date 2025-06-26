import BasePage from '@/components/shared/BasePage';
import Hero from '@/components/pages/Home/Hero';
import Process from '@/components/pages/Home/Process';
import Law from '@/components/pages/Home/Law';
import Mission from '@/components/pages/Home/Mission';

export default function Home() {
  return (
    <BasePage>
      <section>
        <Hero />
      </section>
      <section>
        <Process />
      </section>
      <section>
        <Law />
      </section>
      <section>
        <Mission />
      </section>
    </BasePage>
  );
}
