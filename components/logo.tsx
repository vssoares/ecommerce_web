import LogoImage from '@/assets/imagens/logo.webp';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo(props: any) {
   return (
      <>
         <Link
            href={'https://www.gisantostore.com.br/aneis'}
            className="flex items-center justify-center"
         >
            <Image src={LogoImage} alt="logo" width={props.width} height={props.height} />
            <span className={props?.textClass}>Gi Santos Store</span>
         </Link>
      </>
   );
}
