import Image from 'next/image'

export default function Page() {
  return (
    <div className="">
      <nav class="bg-gray-800 p-4">
        <div class="container mx-auto flex justify-between items-center">
          <a href="#" class="text-white font-bold text-xl">Mi Portfolio</a>
          <ul class="flex space-x-4">
            <li><a href="#about" class="text-gray-300 hover:text-white">Sobre mí</a></li>
            <li><a href="#projects" class="text-gray-300 hover:text-white">Proyectos</a></li>
            <li><a href="#skills" class="text-gray-300 hover:text-white">Habilidades</a></li>
            <li><a href="#contact" class="text-gray-300 hover:text-white">Contacto</a></li>
          </ul>
        </div>
      </nav>
      <div className="container flex gap-5 mx-auto">
        <div className="border">
          <Image
            src={'/profile.jpg'}
            width={500}
            height={500}
            alt="Profile picture"
          />
        </div>
        <div className='text-start'>
          <h2 className="text-[40px]">Hola! Soy agustin,</h2>
          <h3 className='mb-5'>Técnico universitario en desarrollo web</h3>
          <p>Soy una persona que disfruta resolver problemas complejos y transformar ideas en soluciones concretas.
            Me enfoco en el aprendizaje continuo y en la mejora constante, siempre buscando formas de innovar y aportar
            valor en cada proyecto que emprendo.</p>
        </div>
      </div>
    </div>
  )
}