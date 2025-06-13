import Image from 'next/image';
import ListCities from '@/components/pages/legacy/Home/CitiesList';
import ChevronRightIcon from '@/components/Icons/ChevronRight';
import BasePage from '@/components/shared/BasePage';
import Link from 'next/link';

export default function HomePage() {
  return (
    <BasePage>
      <h1>hello world</h1>
      <div className="bg-primary text-primary-content">Primary color</div>
    </BasePage>
  );
}
