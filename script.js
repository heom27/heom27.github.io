document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Language Translation Configuration ---
    // CUSTOMIZATION: Add more translations or change current ones here.
    const translations = {
        en: {
            nav_about: "About",
            nav_skills: "Skills",
            nav_projects: "Projects",
            nav_github: "GitHub Live",
            theme_blue: "Core Blue",
            theme_red: "Neon Red",
            theme_white: "Light Glass",
            theme_cream: "Vintage Cream",
            hero_badge: "Available for projects",
            hero_title: 'Meet the Architecture of Code.',
            hero_subtitle: "I'm a 17-year-old Python developer and Linux enthusiast. I love turning complex systems into simple and effective solutions.",
            hero_cta_projects: "View Work",
            hero_powered_by: "Tech Stack: ",
            profile_role: "Python Dev & Cyber Explorer",
            stat_experience: "Experience",
            stat_projects: "Projects",
            stat_motivation: "Motivation",
            profile_status: "System Online",
            skills_title: "My Expertise",
            skills_subtitle: "Core competencies and technical skills.",
            skill_1_title: "Python",
            skill_1_desc: "FastAPI, Automation and Web Scraping.",
            skill_2_title: "Linux",
            skill_2_desc: "System management and server configuration.",
            skill_3_title: "Graphic Design",
            skill_3_desc: "Modern designs with Photoshop and Illustrator.",
            skill_4_title: "Cybersecurity",
            skill_4_desc: "Network scanning and security analysis.",
            proj_title: "Recent Projects",
            proj_subtitle: "A showcase of some of my finest work.",
            proj_1_title: "YerliAPI Nexus Core",
            proj_1_desc: "Infrastructure monitoring engine tracking Turkey's services.",
            proj_2_title: "SubTrack API",
            proj_2_desc: "Subscription tracking and exchange rate risk analysis assistant.",
            proj_btn_visit: "Visit Site",
            proj_btn_repo: "View Source",
            gh_title: "GitHub Activity",
            gh_subtitle: "Real-time stats from my GitHub profile",
            gh_sync: "Live Sync",
            cta_title: "Let's Work Together",
            cta_subtitle: "Have a project in mind? Contact me today and let's get started.",
            cta_btn: "Send an Email",
            footer_slogan: "Premium digital architecture."
        },
        tr: {
            nav_about: "Hakkımda",
            nav_skills: "Yetenekler",
            nav_projects: "Projeler",
            nav_github: "GitHub Canlı",
            theme_blue: "Gece Mavisi",
            theme_red: "Neon Kırmızı",
            theme_white: "Aydınlık Cam",
            theme_cream: "Vintage Krem",
            hero_badge: "Projelere uygun",
            hero_title: 'Kodun Mimarisiyle Tanışın.',
            hero_subtitle: "17 yaşında bir Python geliştiricisi ve Linux tutkunuyum. Karmaşık sistemleri basit ve etkili çözümlere dönüştürmeyi seviyorum.",
            hero_cta_projects: "Çalışmaları Gör",
            hero_powered_by: "Teknoloji Yığını: ",
            profile_role: "Python Dev & Cyber Explorer",
            stat_experience: "Deneyim",
            stat_projects: "Projeler",
            stat_motivation: "Motivasyon",
            profile_status: "Sistem Çevrimiçi",
            skills_title: "Uzmanlık Alanlarım",
            skills_subtitle: "Temel yetkinlikler ve teknik beceriler.",
            skill_1_title: "Python",
            skill_1_desc: "FastAPI, Otomasyon ve Veri Kazıma.",
            skill_2_title: "Linux",
            skill_2_desc: "Sistem yönetimi ve sunucu yapılandırması.",
            skill_3_title: "Grafik Tasarım",
            skill_3_desc: "Photoshop ve Illustrator ile modern tasarımlar.",
            skill_4_title: "Siber Güvenlik",
            skill_4_desc: "Ağ tarama ve güvenlik analizi.",
            proj_title: "Son Projeler",
            proj_subtitle: "En iyi çalışmalarımın bir vitrini.",
            proj_1_title: "YerliAPI Nexus Core",
            proj_1_desc: "Türkiye'nin altyapı servislerini izleyen monitoring motoru.",
            proj_2_title: "SubTrack API",
            proj_2_desc: "Abonelik takibi ve döviz kuru risk analizi asistanı.",
            proj_btn_visit: "Siteyi Ziyaret Et",
            proj_btn_repo: "Kaynağı Gör",
            gh_title: "GitHub Etkinliği",
            gh_subtitle: "GitHub profilimden gerçek zamanlı istatistikler",
            gh_sync: "Canlı Senkron",
            cta_title: "Birlikte Çalışalım",
            cta_subtitle: "Aklınızda bir proje mi var? Bugün benimle iletişime geçin ve başlayalım.",
            cta_btn: "E-posta Gönder",
            footer_slogan: "Premium dijital mimari."
        }
    };

    let currentLang = 'en';
    const langToggleBtn = document.getElementById('langToggleBtn');

    function updateLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        langToggleBtn.textContent = lang === 'en' ? 'TR' : 'EN';
    }

    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'tr' : 'en';
        document.body.style.opacity = '0.5';
        setTimeout(() => {
            updateLanguage(currentLang);
            document.body.style.opacity = '1';
        }, 150);
    });

    // --- 2. Theme Configuration ---
    const themeOverlay = document.getElementById('themeOverlay');
    const themeBtn = document.getElementById('themeToggleBtn');
    const themeDropdown = document.getElementById('themeDropdown');
    const themeSelectBtns = document.querySelectorAll('.theme-btn');
    const htmlEl = document.documentElement;
    
    themeBtn.addEventListener('click', (e) => {
        themeDropdown.classList.toggle('show');
        e.stopPropagation();
    });
    document.addEventListener('click', () => {
        themeDropdown.classList.remove('show');
    });

    themeSelectBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const newTheme = btn.getAttribute('data-set-theme');
            const rect = btn.getBoundingClientRect();
            const startX = rect.left + rect.width / 2;
            const startY = rect.top + rect.height / 2;

            themeOverlay.style.left = `${startX}px`;
            themeOverlay.style.top = `${startY}px`;
            
            let overlayColor;
            switch(newTheme) {
                case 'blue': overlayColor = 'hsl(220, 85%, 4%)'; break;
                case 'red': overlayColor = 'hsl(350, 85%, 4%)'; break;
                case 'white': overlayColor = 'hsl(0, 0%, 98%)'; break;
                case 'cream': overlayColor = 'hsl(35, 40%, 94%)'; break;
            }
            themeOverlay.style.backgroundColor = overlayColor;
            themeOverlay.style.transition = 'width 1s cubic-bezier(0.77, 0, 0.175, 1), height 1s cubic-bezier(0.77, 0, 0.175, 1)';
            themeOverlay.classList.add('active');
            
            setTimeout(() => {
                htmlEl.setAttribute('data-theme', newTheme);
                themeOverlay.style.transition = 'none';
                themeOverlay.classList.remove('active');
            }, 800);
        });
    });

    // --- 3. Custom Mouse Glow ---
    const mouseGlow = document.getElementById('mouseGlow');
    let mouseTimeout;

    document.addEventListener('mousemove', (e) => {
        mouseGlow.style.opacity = '1';
        mouseGlow.style.left = `${e.clientX}px`;
        mouseGlow.style.top = `${e.clientY}px`;
        clearTimeout(mouseTimeout);
        mouseTimeout = setTimeout(() => {
            mouseGlow.style.opacity = '0';
        }, 1500);
    });
    
    document.addEventListener('mouseleave', () => {
        mouseGlow.style.opacity = '0';
    });

    // --- 4. 3D Tilt Effect ---
    const tiltElements = document.querySelectorAll('[data-tilt]');
    tiltElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;
            el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            const glare = el.querySelector('.glare');
            if (glare) {
                glare.style.opacity = '1';
                glare.style.transform = `translate(-50%, -50%) translate(${x - centerX}px, ${y - centerY}px)`;
            }
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            const glare = el.querySelector('.glare');
            if (glare) {
                glare.style.opacity = '0';
                glare.style.transform = `translate(-50%, -50%)`;
            }
        });
    });

    // --- 5. GitHub API (CUSTOMIZATION: Change 'Octocat' to your GitHub USERNAME) ---
    const fetchGitHubData = async () => {
        const username = 'heom27'; 
        const container = document.getElementById('ghDataContainer');
        
        try {
            const userRes = await fetch(`https://api.github.com/users/${username}`);
            if (!userRes.ok) throw new Error('User not found');
            const userData = await userRes.json();
            const reposRes = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
            const reposData = await reposRes.json();
            
            container.innerHTML = `
                <div class="gh-content-grid">
                    <div class="gh-sidebar glass-panel" style="padding: 30px; text-align: center;">
                        <img src="${userData.avatar_url}" alt="GitHub Avatar" class="gh-profile-img mx-auto mb-3">
                        <h3 class="title" style="font-size: 1.5rem;">${userData.name || username}</h3>
                        <p class="subtitle" style="font-size: 0.9rem;">@${username}</p>
                        <div class="gh-stats-row justify-center mt-4">
                            <div class="gh-stat box-glass">
                                <strong>${userData.public_repos}</strong>
                                <span>Repos</span>
                            </div>
                            <div class="gh-stat box-glass">
                                <strong>${userData.followers}</strong>
                                <span>Followers</span>
                            </div>
                        </div>
                        <a href="${userData.html_url}" target="_blank" class="btn btn-primary mt-4" style="width: 100%;">Follow</a>
                    </div>
                    <div class="gh-repos-area">
                        <h3 class="title mb-4" style="font-size: 1.4rem;">Repositores</h3>
                        <div class="gh-repos-grid">
                            ${reposData.map(repo => `
                                <a href="${repo.html_url}" target="_blank" style="text-decoration:none; color:inherit;">
                                    <div class="repo-card glass-panel">
                                        <h3>${repo.name}</h3>
                                        <p>${repo.description ? repo.description.substring(0, 60) + '...' : 'No description.'}</p>
                                        <div class="repo-meta">
                                            <span>⭐ ${repo.stargazers_count}</span>
                                            <span>🍴 ${repo.forks_count}</span>
                                        </div>
                                    </div>
                                </a>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
        } catch (error) {
            container.innerHTML = `<p>Error loading GitHub data.</p>`;
        }
    };
    
    fetchGitHubData();
    document.getElementById('currentYear').textContent = new Date().getFullYear();
});
