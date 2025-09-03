import { MenuPage } from '@/components/menu-page';
import { menuData } from '@/lib/menu-data';

export default function Home() {
  return (
    <main>
      <MenuPage menuData={menuData} />
    </main>
  );
}
