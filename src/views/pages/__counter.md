<nav
  class="bg-background border-b border-b-gray-200 border-solid z-20 w-full lg:fixed"
  id="topnav"
>
  <div class="mx-auto w-full lg:px-8">
    <div class="py-3 w-full flex flex-col lg:flex-row">
      <!-- small screen view -->
      <div class="flex justify-between lg:hidden px-4">
        <!-- small screen logo -->
        <div>
          <img src="/logo.jpg" class="h-[45px] w-fit" />
        </div>

        <!-- small screen menu button -->
        <button
          id="hamburger"
          type="button"
          class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="mobileNav"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>

      <!-- large screen view -->
      <div
        class="hidden w-full lg:flex justify-between max-lg:bg-white max-lg:mt-1 max-lg:px-4 max-lg:shadow-lg max-lg:shadow-gray-200 max-lg:h-auto max-lg:overflow-auto transition-all duration-500 delay-200"
        id="navbar"
      >
        <!-- links -->
        <ul
          class="flex lg:items-center max-lg:gap-4 max-lg:mb-4 flex-col mt-4 lg:flex-1 md:mt-0 lg:flex-row"
        >
          <li>
            <a
              href="/"
              class="text-gray-500 text-sm font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base md:mb-0 md:mr-3 hover:text-gray-900"
              >Home</a
            >
          </li>
          <li>
            <a
              href="/about"
              class="text-gray-500 text-sm font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base md:mb-0 md:mr-3 hover:text-gray-900"
              >About us</a
            >
          </li>
          <li>
            <a
              href="/products"
              class="text-gray-500 text-sm font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base md:mb-0 md:mr-3 hover:text-gray-900"
              >Products</a
            >
          </li>
          <li>
            <a
              href="/partners"
              class="text-gray-500 text-sm font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base md:mb-0 md:mr-3 hover:text-gray-900"
              >Our partners</a
            >
          </li>
        </ul>

        <!-- middle logo placeholder -->
        <div>
          <img src="/logo.jpg" class="h-[80px] w-fit" />
        </div>

        <!-- end cta contact us button -->
        <div
          class="flex lg:items-center justify-start flex-col lg:flex-row max-lg:gap-4 lg:flex-1 lg:justify-end"
        >
          <button
            class="bg-primary hover:bg-primary text-primary-foreground rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm lg:ml-5"
          >
            Contact us
          </button>
        </div>
      </div>
    </div>

    <!-- Dropdown menu for small screens -->
    <div
      class="hidden md:hidden border-y py-2 w-full flex-col gap-4 max-lg:bg-white px-4 shadow-lg shadow-gray-200 h-auto overflow-auto transition-all duration-500 delay-200"
      id="mobileNav"
    >
      <!-- links -->
      <ul
        class="flex lg:items-center max-lg:gap-4 max-lg:mb-4 flex-col mt-4 lg:flex-1 md:mt-0 lg:flex-row"
      >
        <li>
          <a
            href="/"
            class="text-gray-500 text-sm font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base md:mb-0 md:mr-3 hover:text-gray-900"
            >Home</a
          >
        </li>
        <li>
          <a
            href="/about"
            class="text-gray-500 text-sm font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base md:mb-0 md:mr-3 hover:text-gray-900"
            >About us</a
          >
        </li>
        <li>
          <a
            href="/products"
            class="text-gray-500 text-sm font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base md:mb-0 md:mr-3 hover:text-gray-900"
            >Products</a
          >
        </li>
        <li>
          <a
            href="/partners"
            class="text-gray-500 text-sm font-medium hover:text-prime-blue-700 transition-all duration-500 mb-2 block lg:mr-6 lg:text-base md:mb-0 md:mr-3 hover:text-gray-900"
            >Our partners</a
          >
        </li>
      </ul>

      <div
        class="flex lg:items-center justify-start flex-col lg:flex-row max-lg:gap-4 lg:flex-1 lg:justify-end"
      >
        <button
          class="bg-primary hover:bg-primary text-primary-foreground rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 py-3 px-6 text-sm lg:ml-5"
        >
          Contact us
        </button>
      </div>
    </div>
  </div>
</nav>

<script>
  // Select elements
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");

  // Toggle mobile nav on hamburger click
  hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden");
    mobileNav.classList.toggle("flex");
  });
</script>
