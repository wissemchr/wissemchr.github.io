/**
 * PORTFOLIO MAP - Carte Enchantée
 * Gestion des projets sous forme d'arbres interactifs
 */

class PortfolioMap {
    constructor() {
        this.projectsData = this.initializeProjectsData();
        this.modal = null;
        this.init();
    }

    initializeProjectsData() {
        return {
            ecommerce: {
                title: "Boutique Enchantée",
                subtitle: "Analytics E-commerce",
                problem: "Une boutique en ligne TPE perdait 70% de ses visiteurs sans comprendre pourquoi. Les ventes stagnaient malgré un trafic correct, et l'équipe naviguait à l'aveugle sans insights sur le comportement des clients.",
                context: "E-commerce de mode féminine, 15 000 visiteurs/mois, équipe de 3 personnes, plateforme Shopify, budget limité pour les outils d'analyse traditionnels.",
                tools: [
                    "Google Analytics 4 - Suivi comportemental",
                    "Hotjar - Heatmaps et enregistrements",
                    "Python - Scripts d'analyse personnalisés",
                    "Tableau - Dashboards interactifs",
                    "BigQuery - Entrepôt de données"
                ],
                results: [
                    { metric: "ROI", value: "+45%", description: "Augmentation du retour sur investissement" },
                    { metric: "Conversion", value: "+32%", description: "Amélioration du taux de conversion" },
                    { metric: "Abandon panier", value: "-28%", description: "Réduction de l'abandon de panier" },
                    { metric: "Temps session", value: "+67%", description: "Augmentation de l'engagement" }
                ],
                color: "#ff6b6b"
            },
            manufacturing: {
                title: "Forge Moderne",
                subtitle: "Optimisation Industrielle",
                problem: "Une PME manufacturière subissait des retards de production constants, des défauts qualité imprévisibles et une visibilité limitée sur ses processus. Les coûts explosaient sans comprendre les causes racines.",
                context: "Usine de métallurgie, 50 employés, machines anciennes et nouvelles, production en 3x8, pression concurrentielle forte, besoin d'optimisation urgente.",
                tools: [
                    "IoT Sensors - Collecte de données machines",
                    "Power BI - Dashboards temps réel",
                    "Machine Learning - Maintenance prédictive",
                    "SQL Server - Base de données industrielle",
                    "Azure - Cloud computing"
                ],
                results: [
                    { metric: "Efficacité", value: "+67%", description: "Amélioration de l'efficacité globale" },
                    { metric: "Défauts", value: "-45%", description: "Réduction des défauts qualité" },
                    { metric: "Production", value: "+23%", description: "Augmentation de la production" },
                    { metric: "Maintenance", value: "-35%", description: "Réduction des arrêts non planifiés" }
                ],
                color: "#4ecdc4"
            },
            marketing: {
                title: "Jardin Digital",
                subtitle: "Automatisation Marketing",
                problem: "Une agence marketing gérait manuellement ses campagnes pour 20+ clients, perdant un temps précieux en tâches répétitives. Les performances étaient incohérentes et difficiles à optimiser à grande échelle.",
                context: "Agence digitale, 20 clients actifs, budgets publicitaires variés, équipe de 8 personnes, croissance rapide, besoin d'automatisation et de standardisation.",
                tools: [
                    "HubSpot - Automation marketing",
                    "Facebook Ads API - Gestion programmatique",
                    "Google Ads Scripts - Optimisation automatique",
                    "Zapier - Intégrations workflow",
                    "Data Studio - Reporting client"
                ],
                results: [
                    { metric: "Leads", value: "+89%", description: "Augmentation des leads qualifiés" },
                    { metric: "Engagement", value: "+156%", description: "Amélioration de l'engagement" },
                    { metric: "Retention", value: "+34%", description: "Meilleure rétention client" },
                    { metric: "Temps équipe", value: "-50%", description: "Réduction du temps manuel" }
                ],
                color: "#45b7d1"
            },
            finance: {
                title: "Trésor Transparent",
                subtitle: "Dashboard Financier",
                problem: "Le directeur financier d'une PME passait 2 jours par semaine à compiler manuellement des rapports financiers éparpillés dans différents systèmes. Les décisions stratégiques étaient retardées par manque de visibilité temps réel.",
                context: "PME de services, 80 employés, 5 filiales, systèmes comptables multiples, reporting mensuel complexe, besoin de consolidation et d'automatisation.",
                tools: [
                    "Power BI - Dashboards financiers",
                    "Excel VBA - Automatisation des imports",
                    "SQL - Requêtes de consolidation",
                    "Sage API - Connexion ERP",
                    "Azure - Hébergement sécurisé"
                ],
                results: [
                    { metric: "Visibilité", value: "+78%", description: "Amélioration de la visibilité financière" },
                    { metric: "Temps rapport", value: "-65%", description: "Réduction du temps de reporting" },
                    { metric: "Précision", value: "+45%", description: "Amélioration de la précision" },
                    { metric: "Réactivité", value: "+90%", description: "Décisions plus rapides" }
                ],
                color: "#f39c12"
            },
            hr: {
                title: "Équipe Harmonieuse",
                subtitle: "Analytics RH",
                problem: "Le service RH d'une entreprise en croissance perdait ses talents sans comprendre pourquoi. Le turnover était élevé, le recrutement inefficace, et la satisfaction employés en baisse constante.",
                context: "Entreprise tech, 120 employés, croissance 40%/an, équipe RH débordée, processus manuels, besoin d'insights sur le capital humain.",
                tools: [
                    "Survey Tools - Enquêtes satisfaction",
                    "Python - Analyse prédictive RH",
                    "Tableau - Visualisations RH",
                    "SIRH API - Intégration données",
                    "Machine Learning - Prédiction turnover"
                ],
                results: [
                    { metric: "Satisfaction", value: "+92%", description: "Amélioration satisfaction employés" },
                    { metric: "Turnover", value: "-38%", description: "Réduction du turnover" },
                    { metric: "Performance", value: "+67%", description: "Amélioration des performances" },
                    { metric: "Recrutement", value: "+45%", description: "Efficacité recrutement" }
                ],
                color: "#9b59b6"
            },
            supply: {
                title: "Réseau Vivant",
                subtitle: "Supply Chain Intelligente",
                problem: "Une PME de distribution subissait des ruptures de stock fréquentes d'un côté et des surstocks coûteux de l'autre. La chaîne d'approvisionnement manquait de visibilité et de prédictibilité.",
                context: "Distributeur multi-produits, 500 références, 50 fournisseurs, 200 clients, saisonnalité forte, besoin d'optimisation des stocks et des flux.",
                tools: [
                    "Advanced Analytics - Prévision demande",
                    "Power BI - Dashboards supply chain",
                    "Python - Optimisation stocks",
                    "API Fournisseurs - Automatisation commandes",
                    "Azure ML - Machine Learning"
                ],
                results: [
                    { metric: "Rapidité", value: "+54%", description: "Amélioration des délais" },
                    { metric: "Coûts", value: "-32%", description: "Réduction des coûts logistiques" },
                    { metric: "Traçabilité", value: "+87%", description: "Amélioration de la traçabilité" },
                    { metric: "Stock", value: "-25%", description: "Optimisation des niveaux de stock" }
                ],
                color: "#1abc9c"
            }
        };
    }

    init() {
        this.setupProjectTreesInteraction();
        this.createModal();
        this.setupModalEvents();
        this.initializeTreeAnimations();
    }

    setupProjectTreesInteraction() {
        const projectTrees = document.querySelectorAll('.project-tree');
        
        projectTrees.forEach(tree => {
            const projectId = tree.getAttribute('data-project');
            
            // Hover effects
            tree.addEventListener('mouseenter', () => {
                this.animateTreeHover(tree, true);
            });
            
            tree.addEventListener('mouseleave', () => {
                this.animateTreeHover(tree, false);
            });
            
            // Click to open modal
            tree.addEventListener('click', () => {
                this.openProjectModal(projectId);
            });
            
            // Interaction avec les fruits (résultats)
            const fruits = tree.querySelectorAll('.fruit');
            fruits.forEach(fruit => {
                fruit.addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.animateFruitClick(fruit);
                });
            });
        });
    }

    animateTreeHover(tree, isHovering) {
        const crown = tree.querySelector('.tree-crown');
        const dataFlow = tree.querySelector('.data-flow');
        const fruits = tree.querySelectorAll('.fruit');
        const leaves = tree.querySelector('.leaves');
        
        if (isHovering) {
            // Effet de croissance et de brillance
            tree.style.transform = 'scale(1.1)';
            tree.style.filter = 'brightness(1.2)';
            
            if (crown) {
                crown.style.boxShadow = '0 0 30px rgba(64, 166, 120, 0.6)';
            }
            
            if (dataFlow) {
                dataFlow.style.animationDuration = '2s';
                dataFlow.style.opacity = '1';
            }
            
            fruits.forEach((fruit, index) => {
                setTimeout(() => {
                    fruit.style.transform = 'scale(1.3)';
                    fruit.style.boxShadow = '0 0 15px var(--mystical-gold)';
                }, index * 100);
            });
            
            if (leaves) {
                leaves.style.animationDuration = '2s';
            }
            
            // Créer des particules magiques
            this.createTreeParticles(tree);
            
        } else {
            // Retour à l'état normal
            tree.style.transform = 'scale(1)';
            tree.style.filter = 'brightness(1)';
            
            if (crown) {
                crown.style.boxShadow = '0 0 20px rgba(64, 166, 120, 0.4)';
            }
            
            if (dataFlow) {
                dataFlow.style.animationDuration = '4s';
                dataFlow.style.opacity = '0.7';
            }
            
            fruits.forEach(fruit => {
                fruit.style.transform = 'scale(1)';
                fruit.style.boxShadow = '0 0 8px var(--mystical-gold)';
            });
            
            if (leaves) {
                leaves.style.animationDuration = '4s';
            }
        }
    }

    createTreeParticles(tree) {
        const rect = tree.getBoundingClientRect();
        const particleCount = 8;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: var(--ethereal-turquoise);
                border-radius: 50%;
                pointer-events: none;
                z-index: 100;
                left: ${rect.left + rect.width / 2 + (Math.random() - 0.5) * 60}px;
                top: ${rect.top + rect.height / 2 + (Math.random() - 0.5) * 80}px;
                box-shadow: 0 0 10px var(--ethereal-turquoise);
            `;
            
            document.body.appendChild(particle);
            
            particle.animate([
                { 
                    opacity: 0,
                    transform: 'scale(0) translateY(0px)' 
                },
                { 
                    opacity: 1,
                    transform: 'scale(1) translateY(-30px)' 
                },
                { 
                    opacity: 0,
                    transform: 'scale(0) translateY(-60px)' 
                }
            ], {
                duration: 2000 + Math.random() * 1000,
                easing: 'ease-out'
            }).onfinish = () => {
                particle.remove();
            };
        }
    }

    animateFruitClick(fruit) {
        // Animation de récolte du fruit
        fruit.style.animation = 'none';
        fruit.offsetHeight; // Force reflow
        fruit.style.animation = 'fruitHarvest 0.8s ease-out';
        
        // Créer un effet de collecte
        const rect = fruit.getBoundingClientRect();
        const collectEffect = document.createElement('div');
        collectEffect.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: radial-gradient(circle, var(--mystical-gold) 0%, transparent 70%);
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${rect.left}px;
            top: ${rect.top}px;
        `;
        
        document.body.appendChild(collectEffect);
        
        collectEffect.animate([
            { 
                transform: 'scale(1) translateY(0px)',
                opacity: 1 
            },
            { 
                transform: 'scale(2) translateY(-50px)',
                opacity: 0 
            }
        ], {
            duration: 600,
            easing: 'ease-out'
        }).onfinish = () => {
            collectEffect.remove();
        };
    }

    createModal() {
        const modal = document.getElementById('project-modal');
        this.modal = modal;
        
        if (!modal) {
            console.error('Modal not found');
            return;
        }
    }

    setupModalEvents() {
        if (!this.modal) return;
        
        const closeBtn = this.modal.querySelector('.modal-close');
        
        // Fermeture du modal
        closeBtn?.addEventListener('click', () => {
            this.closeModal();
        });
        
        // Fermeture en cliquant en dehors
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });
        
        // Fermeture avec Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.style.display === 'flex') {
                this.closeModal();
            }
        });
    }

    openProjectModal(projectId) {
        const project = this.projectsData[projectId];
        
        if (!project || !this.modal) return;
        
        // Remplir le contenu du modal
        this.populateModal(project);
        
        // Afficher le modal avec animation
        this.modal.style.display = 'flex';
        this.modal.style.opacity = '0';
        
        // Animation d'ouverture
        requestAnimationFrame(() => {
            this.modal.style.opacity = '1';
            const modalContent = this.modal.querySelector('.modal-content');
            if (modalContent) {
                modalContent.style.transform = 'scale(0.8) translateY(50px)';
                modalContent.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
                
                requestAnimationFrame(() => {
                    modalContent.style.transform = 'scale(1) translateY(0)';
                });
            }
        });
        
        // Désactiver le scroll du body
        document.body.style.overflow = 'hidden';
        
        // Animer les éléments du modal
        this.animateModalContent();
    }

    populateModal(project) {
        const titleEl = this.modal.querySelector('#modal-title');
        const problemEl = this.modal.querySelector('#modal-problem');
        const contextEl = this.modal.querySelector('#modal-context');
        const toolsEl = this.modal.querySelector('#modal-tools');
        const resultsEl = this.modal.querySelector('#modal-results');
        
        if (titleEl) titleEl.textContent = project.title;
        if (problemEl) problemEl.textContent = project.problem;
        if (contextEl) contextEl.textContent = project.context;
        
        // Outils utilisés
        if (toolsEl) {
            toolsEl.innerHTML = project.tools.map(tool => 
                `<div class="tool-item">
                    <span class="tool-icon">🔧</span>
                    <span class="tool-name">${tool}</span>
                </div>`
            ).join('');
        }
        
        // Résultats obtenus
        if (resultsEl) {
            resultsEl.innerHTML = project.results.map(result => 
                `<div class="result-item">
                    <div class="result-metric" style="color: ${project.color}">${result.value}</div>
                    <div class="result-label">${result.metric}</div>
                    <div class="result-description">${result.description}</div>
                </div>`
            ).join('');
        }
    }

    animateModalContent() {
        const sections = this.modal.querySelectorAll('.detail-section');
        
        sections.forEach((section, index) => {
            section.style.opacity = '0';
            section.style.transform = 'translateX(-30px)';
            
            setTimeout(() => {
                section.style.transition = 'all 0.4s ease-out';
                section.style.opacity = '1';
                section.style.transform = 'translateX(0)';
            }, index * 150);
        });
        
        // Animer les outils
        setTimeout(() => {
            const tools = this.modal.querySelectorAll('.tool-item');
            tools.forEach((tool, index) => {
                tool.style.opacity = '0';
                tool.style.transform = 'scale(0.8)';
                
                setTimeout(() => {
                    tool.style.transition = 'all 0.3s ease-out';
                    tool.style.opacity = '1';
                    tool.style.transform = 'scale(1)';
                }, index * 80);
            });
        }, 600);
        
        // Animer les résultats
        setTimeout(() => {
            const results = this.modal.querySelectorAll('.result-item');
            results.forEach((result, index) => {
                result.style.opacity = '0';
                result.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    result.style.transition = 'all 0.4s ease-out';
                    result.style.opacity = '1';
                    result.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }, 900);
    }

    closeModal() {
        if (!this.modal) return;
        
        const modalContent = this.modal.querySelector('.modal-content');
        
        // Animation de fermeture
        if (modalContent) {
            modalContent.style.transform = 'scale(0.8) translateY(50px)';
        }
        
        this.modal.style.opacity = '0';
        
        setTimeout(() => {
            this.modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }, 300);
    }

    initializeTreeAnimations() {
        // Animation CSS supplémentaire pour la récolte des fruits
        const fruitHarvestCSS = `
            @keyframes fruitHarvest {
                0% { transform: scale(1) rotate(0deg); }
                50% { transform: scale(1.3) rotate(180deg); }
                100% { transform: scale(1) rotate(360deg); }
            }
        `;
        
        const style = document.createElement('style');
        style.textContent = fruitHarvestCSS;
        document.head.appendChild(style);
        
        // Styles pour le modal
        const modalCSS = `
            .project-modal {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(13, 17, 23, 0.95);
                backdrop-filter: blur(10px);
                display: none;
                align-items: center;
                justify-content: center;
                z-index: 2000;
                opacity: 0;
                transition: opacity 0.3s ease;
            }
            
            .modal-content {
                background: rgba(26, 29, 35, 0.95);
                border: 1px solid rgba(64, 166, 120, 0.3);
                border-radius: 20px;
                max-width: 800px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                backdrop-filter: blur(20px);
                box-shadow: 0 20px 60px rgba(10, 61, 46, 0.4);
            }
            
            .modal-header {
                padding: 30px 30px 20px;
                border-bottom: 1px solid rgba(64, 166, 120, 0.2);
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .modal-header h3 {
                font-family: var(--font-title);
                font-size: 1.8rem;
                color: var(--luminous-white);
                margin: 0;
            }
            
            .modal-close {
                background: none;
                border: none;
                color: var(--soft-white);
                font-size: 2rem;
                cursor: pointer;
                transition: var(--transition-smooth);
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
            }
            
            .modal-close:hover {
                background: rgba(64, 166, 120, 0.2);
                color: var(--mystical-gold);
                transform: rotate(90deg);
            }
            
            .modal-body {
                padding: 30px;
            }
            
            .detail-section {
                margin-bottom: 30px;
            }
            
            .detail-section h4 {
                font-family: var(--font-title);
                font-size: 1.3rem;
                color: var(--ethereal-turquoise);
                margin-bottom: 15px;
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .detail-section p {
                color: var(--soft-white);
                line-height: 1.7;
                opacity: 0.9;
            }
            
            .tool-item {
                display: flex;
                align-items: center;
                gap: 10px;
                padding: 10px 15px;
                background: rgba(64, 166, 120, 0.1);
                border: 1px solid rgba(78, 205, 196, 0.2);
                border-radius: 10px;
                margin-bottom: 10px;
                transition: var(--transition-smooth);
            }
            
            .tool-item:hover {
                background: rgba(64, 166, 120, 0.2);
                transform: translateX(5px);
            }
            
            .tool-icon {
                font-size: 1.2rem;
            }
            
            .tool-name {
                color: var(--luminous-white);
                font-weight: 500;
            }
            
            .result-item {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-align: center;
                padding: 20px;
                background: rgba(13, 17, 23, 0.6);
                border: 1px solid rgba(64, 166, 120, 0.2);
                border-radius: 15px;
                margin-bottom: 15px;
                transition: var(--transition-smooth);
            }
            
            .result-item:hover {
                transform: translateY(-5px);
                box-shadow: 0 10px 30px rgba(64, 166, 120, 0.2);
            }
            
            .result-metric {
                font-size: 2.5rem;
                font-weight: bold;
                font-family: var(--font-title);
                margin-bottom: 5px;
                text-shadow: 0 0 10px currentColor;
            }
            
            .result-label {
                font-size: 1.1rem;
                color: var(--luminous-white);
                font-weight: 600;
                margin-bottom: 8px;
            }
            
            .result-description {
                font-size: 0.9rem;
                color: var(--soft-white);
                opacity: 0.8;
            }
            
            @media (max-width: 768px) {
                .modal-content {
                    width: 95%;
                    max-height: 90vh;
                }
                
                .modal-header, .modal-body {
                    padding: 20px;
                }
                
                .modal-header h3 {
                    font-size: 1.5rem;
                }
                
                .result-metric {
                    font-size: 2rem;
                }
            }
        `;
        
        const modalStyle = document.createElement('style');
        modalStyle.textContent = modalCSS;
        document.head.appendChild(modalStyle);
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    new PortfolioMap();
});

// Export pour utilisation dans d'autres modules
window.PortfolioMap = PortfolioMap;