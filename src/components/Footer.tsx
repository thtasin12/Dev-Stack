import Logo from "../assets/logo-text.png"

const Footer = () => {
  const linkGroups = [
    { title: "PRODUCT", links: ["Home", "Technologies", "Projects"] },
    { title: "COMPANY", links: ["About", "Contact", "Careers"] },
    { title: "LEGAL", links: ["Privacy Policy", "Terms of Service"] },
  ]

  const socials = [
    { name: "GitHub", url: "https://github.com" },
    { name: "Twitter", url: "https://twitter.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
  ]

  return (
    <footer id="about" className="bg-white border-t border-slate-100 mt-20">
      <div 
      className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 pb-12">
          
          <div 
          className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 font-bold text-xl text-slate-900">
              <img src={Logo} alt="Logo" className="h-7" />
            </a>
            <p className="mt-4 text-sm text-slate-400 max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>


            <div 
            className="mt-6 flex items-center gap-5 text-sm font-semibold text-slate-800">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  className="hover:text-slate-600 transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>


          {linkGroups.map((grp) => (
            <div key={grp.title}>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-4">
                {grp.title}
              </h4>

              <ul className="space-y-3 text-sm text-slate-400">
                {grp.links.map((link) => (
                  <li key={link}>
                    <a href="#" 
                    className="hover:text-slate-600 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>



        <div 
        className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between text-sm text-slate-400 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-600 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-slate-600 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer