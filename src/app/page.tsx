// app/page.tsx
import Header from '@/components/header/Header';
import Hero from '@/components/hero/Hero';
import Work from '@/components/work/Work';
import Item from '@/components/item/Item';
import Popularitem from '@/components/item/Popularitem';
import Feature from '@/components/search/Feature';
import Ss from '@/components/ss/Ss';
import Install from '@/components/search/Install';
import Ooter from '@/components/footer/Ooter.js';
export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Work />
      <Popularitem />
      <Item />
      <Feature />
      <Ss />
      <Install />
      <Ooter />
      
      {/* Baaki page ka content yahan */}
    </div>
  );
}
