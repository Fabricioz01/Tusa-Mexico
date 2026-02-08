import { footerMenuLinks, partnerBrands, socialLinks } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-white/5">
      {/* Partner Brands Strip */}
      <div className="border-b border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partnerBrands.map((brand) => (
              <span
                key={brand}
                className="text-gray-600 text-xs font-bold uppercase tracking-widest hover:text-gray-400 transition-colors cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col mb-4">
              <span className="text-2xl font-black tracking-tighter text-white">
                TUSA
              </span>
              <span className="text-[9px] tracking-[0.3em] text-tusa-ocean font-bold uppercase">
                México
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Tecnología japonesa de buceo desde 1952. Diseñado por TABATA Co., Ltd. para la exploración del océano.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
              Menú
            </h4>
            <ul className="space-y-2.5">
              {footerMenuLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
                  Aviso de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
                  Términos y Condiciones
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors">
                  Política de Cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">
              Síguenos
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <span className="text-[10px] font-bold uppercase">
                    {social.platform.slice(0, 2)}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            &copy; {year} TUSA / TABATA Co., Ltd. Todos los derechos reservados.
          </p>
          <p className="text-gray-700 text-[10px] uppercase tracking-widest">
            Desarrollado por FOKUS
          </p>
        </div>
      </div>
    </footer>
  );
}
