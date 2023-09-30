import LemonIcon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/lemon-2.tsx";

export function AppLinkHeader() {
  const menus = [
    { name: "Home", href: "/" },
    { name: "Components", href: "/components" },
    { name: "Docs", href: "/docs" },
    { name: "GitHub", href: "/github" },
  ];
  return (
    <header>
      <nav class="bg-white w-full max-w-screen-lg py-6 px-8 flex flex-col md:flex-row gap-4">
        <div class="flex items-center flex-1">
          <LemonIcon aria-hidden="true" />
          <div class="text-2xl ml-1 font-bold">
            Fresh
          </div>
        </div>
        <ul class="flex items-center gap-6">
          {menus.map((menu) => (
            <li>
              <a
                href={menu.href}
                class={"text-gray-500 hover:text-gray-700 py-1 border-gray-500 font-bold border-b-2"}
              >
                {menu.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
