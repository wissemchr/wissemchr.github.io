/**
 * DATAFOREST - Forêt Enchantée JavaScript
 * Gestion de l'expérience utilisateur magique
 */

class EnchantedForest {
    constructor() {
        this.init();
        this.setupEventListeners();
        this.startMagicalEffects();
    }

    init() {
        // Initialisation du loader
        this.showLoader();
        
        // Attendre que tout soit chargé
        window.addEventListener('load', () => {
            setTimeout(() => {
                this.hideLoader();
                this.initializeNavigation();
                this.initializeScrollEffects();
            }, 2000);
        });
    }

    showLoader() {
        const loader = document.getElementById('enchanted-loader');
        if (loader) {
            loader.style.display = 'flex';
            
            // Animation des mots de chargement
            const words = loader.querySelectorAll('.loading-word');
            words.forEach((word, index) => {
                setTimeout(() => {
                    word.style.opacity = '1';
                    word.style.transform = 'translateY(0)';
                }, index * 500);
            });
        }
    }

    hideLoader() {
        const loader = document.getElementById('enchanted-loader');
        if (loader) {
            loader.classList.add('hidden');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 800);
        }
    }

    setupEventListeners() {
        // Navigation mobile
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
            });
        }

        // Fermer le menu mobile lors du clic sur un lien
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navMenu?.classList.remove('active');
                navToggle?.classList.remove('active');
            });
        });

        // Scroll smooth pour les boutons d'action
        window.scrollToSection = (sectionId) => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start' 
                });
            }
        };

        // Gestion des lucioles interactives
        this.setupFirefliesInteraction();
        
        // Gestion des arbres scintillants
        this.setupTreesInteraction();
    }

    initializeNavigation() {
        const navItems = document.querySelectorAll('.nav-item');
        const sections = document.querySelectorAll('section');

        // Fonction pour mettre à jour la navigation active
        const updateActiveNav = () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= sectionTop - 100) {
                    current = section.getAttribute('id');
                }
            });

            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('data-section') === current) {
                    item.classList.add('active');
                }
            });
        };

        // Écouter le scroll
        window.addEventListener('scroll', updateActiveNav);
        
        // Navigation au clic
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const targetSection = item.getAttribute('data-section');
                const target = document.getElementById(targetSection);
                
                if (target) {
                    target.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start' 
                    });
                }
            });
        });
    }

    initializeScrollEffects() {
        // Effet parallaxe pour le cerf blanc
        const deerContainer = document.querySelector('.white-deer-container');
        const hero = document.querySelector('.enchanted-hero');
        
        if (deerContainer && hero) {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                const heroHeight = hero.offsetHeight;
                const scrollPercent = scrolled / heroHeight;
                
                if (scrollPercent <= 1) {
                    const translateY = scrolled * 0.3;
                    const scale = 1 - (scrollPercent * 0.2);
                    const opacity = 1 - (scrollPercent * 0.8);
                    
                    deerContainer.style.transform = `translateY(calc(-50% + ${translateY}px)) scale(${scale})`;
                    deerContainer.style.opacity = opacity;
                }
            });
        }

        // Effet de navigation transparente
        const nav = document.querySelector('.magical-navigation');
        if (nav) {
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 100) {
                    nav.style.background = 'rgba(13, 17, 23, 0.98)';
                    nav.style.backdropFilter = 'blur(30px)';
                } else {
                    nav.style.background = 'rgba(13, 17, 23, 0.95)';
                    nav.style.backdropFilter = 'blur(20px)';
                }
            });
        }

        // Animation des éléments au scroll
        this.initializeScrollAnimations();
    }

    initializeScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Animations spécifiques selon l'élément
                    if (entry.target.classList.contains('service-card')) {
                        this.animateServiceCard(entry.target);
                    }
                    
                    if (entry.target.classList.contains('project-tree')) {
                        this.animateProjectTree(entry.target);
                    }
                }
            });
        }, observerOptions);

        // Observer les éléments à animer
        const elementsToAnimate = document.querySelectorAll([
            '.service-card',
            '.project-tree',
            '.sanctuary-house',
            '.contact-form-container'
        ].join(','));

        elementsToAnimate.forEach(el => observer.observe(el));
    }

    animateServiceCard(card) {
        const delay = Array.from(card.parentNode.children).indexOf(card) * 200;
        setTimeout(() => {
            card.style.transform = 'translateY(0)';
            card.style.opacity = '1';
        }, delay);
    }

    animateProjectTree(tree) {
        const delay = Array.from(tree.parentNode.children).indexOf(tree) * 300;
        setTimeout(() => {
            tree.style.animation = 'treeGrow 2s ease-out forwards';
        }, delay);
    }

    setupFirefliesInteraction() {
        const fireflies = document.querySelectorAll('.firefly');
        
        fireflies.forEach(firefly => {
            firefly.addEventListener('mouseenter', () => {
                firefly.style.transform = 'scale(1.5)';
                firefly.style.boxShadow = '0 0 25px var(--ethereal-turquoise)';
                
                // Créer un effet de particules
                this.createParticleEffect(firefly);
            });
            
            firefly.addEventListener('mouseleave', () => {
                firefly.style.transform = 'scale(1)';
                firefly.style.boxShadow = '0 0 15px var(--ethereal-turquoise)';
            });
            
            firefly.addEventListener('click', () => {
                this.createMagicalExplosion(firefly);
            });
        });
    }

    setupTreesInteraction() {
        const trees = document.querySelectorAll('.tree');
        
        trees.forEach(tree => {
            tree.addEventListener('mouseenter', () => {
                const dataFlow = tree.querySelector('.data-flow');
                const particles = tree.querySelectorAll('.data-particle');
                
                if (dataFlow) {
                    dataFlow.style.animationDuration = '1s';
                    dataFlow.style.opacity = '1';
                }
                
                particles.forEach(particle => {
                    particle.style.animationDuration = '2s';
                    particle.style.transform = 'scale(1.5)';
                });
            });
            
            tree.addEventListener('mouseleave', () => {
                const dataFlow = tree.querySelector('.data-flow');
                const particles = tree.querySelectorAll('.data-particle');
                
                if (dataFlow) {
                    dataFlow.style.animationDuration = '3s';
                    dataFlow.style.opacity = '0.6';
                }
                
                particles.forEach(particle => {
                    particle.style.animationDuration = '4s';
                    particle.style.transform = 'scale(1)';
                });
            });
        });
    }

    createParticleEffect(element) {
        const rect = element.getBoundingClientRect();
        const particleCount = 5;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 3px;
                height: 3px;
                background: var(--ethereal-turquoise);
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
                left: ${rect.left + rect.width / 2}px;
                top: ${rect.top + rect.height / 2}px;
                box-shadow: 0 0 8px var(--ethereal-turquoise);
            `;
            
            document.body.appendChild(particle);
            
            // Animation de la particule
            const angle = (i / particleCount) * Math.PI * 2;
            const distance = 50 + Math.random() * 30;
            const duration = 1000 + Math.random() * 500;
            
            particle.animate([
                { 
                    transform: 'scale(0) translate(0, 0)',
                    opacity: 1 
                },
                { 
                    transform: `scale(1) translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`,
                    opacity: 0.5 
                },
                { 
                    transform: `scale(0) translate(${Math.cos(angle) * distance * 1.5}px, ${Math.sin(angle) * distance * 1.5}px)`,
                    opacity: 0 
                }
            ], {
                duration: duration,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }).onfinish = () => {
                particle.remove();
            };
        }
    }

    createMagicalExplosion(element) {
        const rect = element.getBoundingClientRect();
        const explosionCount = 12;
        
        for (let i = 0; i < explosionCount; i++) {
            const spark = document.createElement('div');
            spark.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: var(--mystical-gold);
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
                left: ${rect.left + rect.width / 2}px;
                top: ${rect.top + rect.height / 2}px;
                box-shadow: 0 0 10px var(--mystical-gold);
            `;
            
            document.body.appendChild(spark);
            
            const angle = (i / explosionCount) * Math.PI * 2;
            const distance = 80 + Math.random() * 40;
            
            spark.animate([
                { 
                    transform: 'scale(0)',
                    opacity: 1 
                },
                { 
                    transform: `scale(1.5) translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`,
                    opacity: 0.8 
                },
                { 
                    transform: `scale(0) translate(${Math.cos(angle) * distance * 1.2}px, ${Math.sin(angle) * distance * 1.2}px)`,
                    opacity: 0 
                }
            ], {
                duration: 1200,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }).onfinish = () => {
                spark.remove();
            };
        }
        
        // Effet sonore visuel sur l'élément
        element.style.animation = 'none';
        element.offsetHeight; // Force reflow
        element.style.animation = 'fireflyExplosion 0.6s ease-out';
    }

    startMagicalEffects() {
        // Effet de souffle du cerf
        this.startDeerBreathingEffect();
        
        // Effet de scintillement aléatoire
        this.startRandomSparkles();
        
        // Effet de brouillard mystique
        this.startMysticalFog();
    }

    startDeerBreathingEffect() {
        const deer = document.querySelector('.white-deer');
        if (!deer) return;
        
        setInterval(() => {
            const intensity = 0.95 + Math.random() * 0.1;
            deer.style.transform = `scale(${intensity})`;
            
            setTimeout(() => {
                deer.style.transform = 'scale(1)';
            }, 200);
        }, 3000 + Math.random() * 2000);
    }

    startRandomSparkles() {
        const createSparkle = () => {
            const sparkle = document.createElement('div');
            sparkle.style.cssText = `
                position: fixed;
                width: 2px;
                height: 2px;
                background: var(--mystical-gold);
                border-radius: 50%;
                pointer-events: none;
                z-index: 100;
                left: ${Math.random() * window.innerWidth}px;
                top: ${Math.random() * window.innerHeight}px;
                box-shadow: 0 0 6px var(--mystical-gold);
            `;
            
            document.body.appendChild(sparkle);
            
            sparkle.animate([
                { opacity: 0, transform: 'scale(0)' },
                { opacity: 1, transform: 'scale(1)' },
                { opacity: 0, transform: 'scale(0)' }
            ], {
                duration: 2000,
                easing: 'ease-in-out'
            }).onfinish = () => {
                sparkle.remove();
            };
        };
        
        // Créer des étincelles aléatoirement
        setInterval(() => {
            if (Math.random() < 0.3) {
                createSparkle();
            }
        }, 1000);
    }

    startMysticalFog() {
        const hero = document.querySelector('.enchanted-hero');
        if (!hero) return;
        
        const createFogParticle = () => {
            const fog = document.createElement('div');
            fog.style.cssText = `
                position: absolute;
                width: ${50 + Math.random() * 100}px;
                height: ${20 + Math.random() * 40}px;
                background: radial-gradient(ellipse, rgba(64, 166, 120, 0.1) 0%, transparent 70%);
                border-radius: 50%;
                pointer-events: none;
                left: ${Math.random() * 100}%;
                top: ${60 + Math.random() * 40}%;
                opacity: 0;
            `;
            
            hero.appendChild(fog);
            
            fog.animate([
                { 
                    opacity: 0,
                    transform: 'translateX(0px) scale(0.5)' 
                },
                { 
                    opacity: 0.3,
                    transform: 'translateX(50px) scale(1)' 
                },
                { 
                    opacity: 0,
                    transform: 'translateX(100px) scale(1.2)' 
                }
            ], {
                duration: 8000 + Math.random() * 4000,
                easing: 'linear'
            }).onfinish = () => {
                fog.remove();
            };
        };
        
        // Créer des particules de brouillard
        setInterval(() => {
            if (Math.random() < 0.4) {
                createFogParticle();
            }
        }, 2000);
    }

    // Méthodes utilitaires
    static lerp(start, end, factor) {
        return start + (end - start) * factor;
    }

    static easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }

    static easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
}

// CSS pour l'animation d'explosion des lucioles
const explosionCSS = `
@keyframes fireflyExplosion {
    0% { transform: scale(1); filter: brightness(1); }
    50% { transform: scale(2); filter: brightness(3); }
    100% { transform: scale(1); filter: brightness(1); }
}
`;

const style = document.createElement('style');
style.textContent = explosionCSS;
document.head.appendChild(style);

// Initialisation quand le DOM est prêt
document.addEventListener('DOMContentLoaded', () => {
    new EnchantedForest();
});

// Gestion du redimensionnement
window.addEventListener('resize', () => {
    // Recalculer les positions des éléments si nécessaire
    const fireflies = document.querySelectorAll('.firefly');
    fireflies.forEach(firefly => {
        // Réajuster les positions si nécessaire
        firefly.style.transition = 'all 0.3s ease';
    });
});

// Gestion de la visibilité de la page
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause des animations coûteuses quand la page n'est pas visible
        document.body.classList.add('page-hidden');
    } else {
        // Reprendre les animations
        document.body.classList.remove('page-hidden');
    }
});

// Export pour utilisation dans d'autres modules
window.EnchantedForest = EnchantedForest;