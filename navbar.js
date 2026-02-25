document.addEventListener("DOMContentLoaded", function() {
    const navbarHTML = `
    <nav class="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-800">
        <div class="max-w-7xl mx-auto px-4 h-16 relative flex items-center justify-center">
            
            <ul class="hidden md:flex items-center gap-1 list-none p-0 m-0">
                <li><a href="/index.html" class="nav-link px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 hover:text-white transition-all duration-200">Home</a></li>
                <li><a href="/about.html" class="nav-link px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 hover:text-white transition-all duration-200">About Me</a></li>
                <li><a href="/resume.pdf" target="_blank" class="nav-link px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 hover:text-white transition-all duration-200">Resume</a></li>

                <li class="relative group">
                    <button class="nav-link px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-800 hover:text-white transition-all duration-200 flex items-center gap-1">
                        My Work
                        <svg class="w-3 h-3 text-gray-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                    </button>
                    <div class="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-gray-800 rounded-2xl border border-gray-700 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top p-2">
                        <a href="/work/vr-education/" class="block px-4 py-3 rounded-xl hover:bg-gray-700 text-sm text-gray-300 hover:text-white transition-colors">
                            <span class="block font-bold">VR for Education</span>
                            <span class="text-xs text-gray-500">Immersive Research</span>
                        </a>
                        <a href="/work/flood-risk/" class="block px-4 py-3 rounded-xl hover:bg-gray-700 text-sm text-gray-300 hover:text-white transition-colors">
                            <span class="block font-bold">Flood Risk</span>
                            <span class="text-xs text-gray-500">Social Impact VR</span>
                        </a>
                        <a href="/work/careerup/" class="block px-4 py-3 rounded-xl hover:bg-gray-700 text-sm text-gray-300 hover:text-white transition-colors">
                            <span class="block font-bold">CareerUp</span>
                            <span class="text-xs text-gray-500">Service Design</span>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
    `;

    // 1. Inject the HTML
    document.getElementById("navbar-placeholder").innerHTML = navbarHTML;

    // 2. Highlight the Active Link automatically
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active', 'bg-gray-800', 'text-white');
        }
    });
});
