/**
 * CONTACT FORM - Formulaire Enchanté
 * Gestion du formulaire de contact avec validation et effets magiques
 */

class EnchantedContactForm {
    constructor() {
        this.form = document.getElementById('enchanted-contact-form');
        this.isSubmitting = false;
        this.init();
    }

    init() {
        if (!this.form) {
            console.warn('Contact form not found');
            return;
        }

        this.setupFormValidation();
        this.setupMagicalEffects();
        this.setupFormSubmission();
    }

    setupFormValidation() {
        const inputs = this.form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            // Validation en temps réel
            input.addEventListener('input', () => {
                this.validateField(input);
                this.updateFieldMagic(input);
            });
            
            input.addEventListener('blur', () => {
                this.validateField(input);
            });
            
            input.addEventListener('focus', () => {
                this.activateFieldMagic(input);
            });
        });
    }

    validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        let isValid = true;
        let errorMessage = '';

        // Supprimer les messages d'erreur existants
        this.removeFieldError(field);

        // Validation selon le type de champ
        switch (fieldName) {
            case 'name':
                if (!value) {
                    isValid = false;
                    errorMessage = 'Votre nom est requis pour personnaliser notre échange ✨';
                } else if (value.length < 2) {
                    isValid = false;
                    errorMessage = 'Un nom plus long nous aiderait à mieux vous connaître 🌿';
                }
                break;

            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value) {
                    isValid = false;
                    errorMessage = 'Votre email est notre fil d\'Ariane pour vous recontacter 📧';
                } else if (!emailRegex.test(value)) {
                    isValid = false;
                    errorMessage = 'Cette adresse email semble avoir perdu sa magie... 🔮';
                }
                break;

            case 'project':
                if (!value) {
                    isValid = false;
                    errorMessage = 'Partagez-nous votre vision, même embryonnaire ! 🌱';
                } else if (value.length < 20) {
                    isValid = false;
                    errorMessage = 'Quelques détails supplémentaires nous aideraient à mieux comprendre 💭';
                }
                break;
        }

        // Afficher l'erreur si nécessaire
        if (!isValid) {
            this.showFieldError(field, errorMessage);
        } else {
            this.showFieldSuccess(field);
        }

        return isValid;
    }

    removeFieldError(field) {
        const formGroup = field.closest('.form-group');
        const existingError = formGroup.querySelector('.field-error');
        const existingSuccess = formGroup.querySelector('.field-success');
        
        if (existingError) {
            existingError.remove();
        }
        if (existingSuccess) {
            existingSuccess.remove();
        }
        
        field.classList.remove('error', 'success');
        formGroup.classList.remove('has-error', 'has-success');
    }

    showFieldError(field, message) {
        const formGroup = field.closest('.form-group');
        
        field.classList.add('error');
        formGroup.classList.add('has-error');
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.innerHTML = `
            <span class="error-icon">⚠️</span>
            <span class="error-text">${message}</span>
        `;
        
        formGroup.appendChild(errorDiv);
        
        // Animation d'apparition
        errorDiv.style.opacity = '0';
        errorDiv.style.transform = 'translateY(-10px)';
        
        requestAnimationFrame(() => {
            errorDiv.style.transition = 'all 0.3s ease-out';
            errorDiv.style.opacity = '1';
            errorDiv.style.transform = 'translateY(0)';
        });
    }

    showFieldSuccess(field) {
        const formGroup = field.closest('.form-group');
        
        field.classList.add('success');
        formGroup.classList.add('has-success');
        
        const successDiv = document.createElement('div');
        successDiv.className = 'field-success';
        successDiv.innerHTML = `
            <span class="success-icon">✨</span>
            <span class="success-text">Parfait !</span>
        `;
        
        formGroup.appendChild(successDiv);
        
        // Animation d'apparition
        successDiv.style.opacity = '0';
        successDiv.style.transform = 'scale(0.8)';
        
        requestAnimationFrame(() => {
            successDiv.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
            successDiv.style.opacity = '1';
            successDiv.style.transform = 'scale(1)';
        });
        
        // Créer des particules de succès
        this.createSuccessParticles(field);
    }

    setupMagicalEffects() {
        const inputs = this.form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            // Effet de focus magique
            input.addEventListener('focus', () => {
                this.activateFieldMagic(input);
            });
            
            input.addEventListener('blur', () => {
                this.deactivateFieldMagic(input);
            });
            
            // Effet de frappe
            input.addEventListener('input', () => {
                this.createTypingEffect(input);
            });
        });
    }

    activateFieldMagic(field) {
        const formGroup = field.closest('.form-group');
        const sparkle = formGroup.querySelector('.input-sparkle');
        
        formGroup.classList.add('focused');
        
        if (sparkle) {
            sparkle.style.opacity = '1';
            sparkle.style.animationPlayState = 'running';
        }
        
        // Créer un halo magique
        this.createFieldHalo(field);
    }

    deactivateFieldMagic(field) {
        const formGroup = field.closest('.form-group');
        const sparkle = formGroup.querySelector('.input-sparkle');
        
        formGroup.classList.remove('focused');
        
        if (sparkle) {
            sparkle.style.opacity = '0';
            sparkle.style.animationPlayState = 'paused';
        }
    }

    createFieldHalo(field) {
        const rect = field.getBoundingClientRect();
        const halo = document.createElement('div');
        
        halo.style.cssText = `
            position: fixed;
            left: ${rect.left - 5}px;
            top: ${rect.top - 5}px;
            width: ${rect.width + 10}px;
            height: ${rect.height + 10}px;
            border: 2px solid var(--ethereal-turquoise);
            border-radius: 15px;
            pointer-events: none;
            z-index: 100;
            opacity: 0;
            box-shadow: 0 0 20px rgba(78, 205, 196, 0.3);
        `;
        
        document.body.appendChild(halo);
        
        halo.animate([
            { opacity: 0, transform: 'scale(0.95)' },
            { opacity: 0.6, transform: 'scale(1)' },
            { opacity: 0, transform: 'scale(1.05)' }
        ], {
            duration: 1000,
            easing: 'ease-out'
        }).onfinish = () => {
            halo.remove();
        };
    }

    createTypingEffect(field) {
        if (Math.random() < 0.1) { // 10% de chance
            const rect = field.getBoundingClientRect();
            const particle = document.createElement('div');
            
            particle.style.cssText = `
                position: fixed;
                left: ${rect.right - 20}px;
                top: ${rect.top + rect.height / 2}px;
                width: 3px;
                height: 3px;
                background: var(--mystical-gold);
                border-radius: 50%;
                pointer-events: none;
                z-index: 100;
                box-shadow: 0 0 6px var(--mystical-gold);
            `;
            
            document.body.appendChild(particle);
            
            particle.animate([
                { 
                    opacity: 1,
                    transform: 'scale(1) translateX(0px)' 
                },
                { 
                    opacity: 0,
                    transform: 'scale(0) translateX(20px)' 
                }
            ], {
                duration: 800,
                easing: 'ease-out'
            }).onfinish = () => {
                particle.remove();
            };
        }
    }

    createSuccessParticles(field) {
        const rect = field.getBoundingClientRect();
        const particleCount = 6;
        
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
                left: ${rect.right - 10}px;
                top: ${rect.top + rect.height / 2}px;
                box-shadow: 0 0 8px var(--ethereal-turquoise);
            `;
            
            document.body.appendChild(particle);
            
            const angle = (i / particleCount) * Math.PI * 2;
            const distance = 30 + Math.random() * 20;
            
            particle.animate([
                { 
                    opacity: 1,
                    transform: 'scale(1) translate(0, 0)' 
                },
                { 
                    opacity: 0,
                    transform: `scale(0) translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)` 
                }
            ], {
                duration: 1200,
                easing: 'ease-out'
            }).onfinish = () => {
                particle.remove();
            };
        }
    }

    setupFormSubmission() {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleFormSubmission();
        });
    }

    async handleFormSubmission() {
        if (this.isSubmitting) return;
        
        // Valider tous les champs
        const isFormValid = this.validateAllFields();
        
        if (!isFormValid) {
            this.showFormError('Quelques champs ont besoin de votre attention magique ✨');
            return;
        }
        
        this.isSubmitting = true;
        
        // Animation du bouton de soumission
        const submitBtn = this.form.querySelector('.submit-btn');
        this.animateSubmitButton(submitBtn, 'loading');
        
        try {
            // Simuler l'envoi (remplacer par votre logique d'envoi réelle)
            await this.sendFormData();
            
            // Succès
            this.animateSubmitButton(submitBtn, 'success');
            this.showFormSuccess();
            this.createFormSuccessAnimation();
            
            // Réinitialiser le formulaire après un délai
            setTimeout(() => {
                this.resetForm();
                this.animateSubmitButton(submitBtn, 'normal');
            }, 3000);
            
        } catch (error) {
            // Erreur
            this.animateSubmitButton(submitBtn, 'error');
            this.showFormError('Une erreur magique s\'est produite... Réessayons ensemble ! 🔮');
            
            setTimeout(() => {
                this.animateSubmitButton(submitBtn, 'normal');
            }, 3000);
        }
        
        this.isSubmitting = false;
    }

    validateAllFields() {
        const requiredFields = this.form.querySelectorAll('input[required], textarea[required]');
        let isValid = true;
        
        requiredFields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });
        
        return isValid;
    }

    async sendFormData() {
        // Simuler un délai d'envoi
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Ici, vous pouvez implémenter votre logique d'envoi réelle
        // Par exemple, avec fetch() vers votre endpoint
        /*
        const formData = new FormData(this.form);
        const response = await fetch('/contact', {
            method: 'POST',
            body: formData
        });
        
        if (!response.ok) {
            throw new Error('Erreur d\'envoi');
        }
        */
        
        // Pour la démo, on simule un succès
        return Promise.resolve();
    }

    animateSubmitButton(button, state) {
        const btnText = button.querySelector('.btn-text');
        const btnSparkle = button.querySelector('.btn-sparkle');
        
        switch (state) {
            case 'loading':
                btnText.textContent = 'Envoi en cours...';
                btnSparkle.textContent = '🌀';
                button.style.background = 'linear-gradient(135deg, var(--ethereal-turquoise) 0%, var(--mystical-gold) 100%)';
                button.disabled = true;
                break;
                
            case 'success':
                btnText.textContent = 'Message envoyé !';
                btnSparkle.textContent = '🎉';
                button.style.background = 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)';
                break;
                
            case 'error':
                btnText.textContent = 'Erreur d\'envoi';
                btnSparkle.textContent = '⚠️';
                button.style.background = 'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)';
                break;
                
            case 'normal':
                btnText.textContent = 'Envoyer le message';
                btnSparkle.textContent = '✨';
                button.style.background = 'linear-gradient(135deg, var(--mystical-gold) 0%, var(--ethereal-turquoise) 100%)';
                button.disabled = false;
                break;
        }
    }

    showFormError(message) {
        this.removeFormMessage();
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'form-message form-error';
        errorDiv.innerHTML = `
            <span class="message-icon">🌙</span>
            <span class="message-text">${message}</span>
        `;
        
        this.form.appendChild(errorDiv);
        this.animateFormMessage(errorDiv);
    }

    showFormSuccess() {
        this.removeFormMessage();
        
        const successDiv = document.createElement('div');
        successDiv.className = 'form-message form-success';
        successDiv.innerHTML = `
            <span class="message-icon">🌟</span>
            <span class="message-text">Votre message a pris son envol vers notre forêt ! Nous vous répondrons très bientôt.</span>
        `;
        
        this.form.appendChild(successDiv);
        this.animateFormMessage(successDiv);
    }

    removeFormMessage() {
        const existingMessage = this.form.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
    }

    animateFormMessage(messageEl) {
        messageEl.style.opacity = '0';
        messageEl.style.transform = 'translateY(20px)';
        
        requestAnimationFrame(() => {
            messageEl.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
            messageEl.style.opacity = '1';
            messageEl.style.transform = 'translateY(0)';
        });
    }

    createFormSuccessAnimation() {
        const formRect = this.form.getBoundingClientRect();
        const centerX = formRect.left + formRect.width / 2;
        const centerY = formRect.top + formRect.height / 2;
        
        // Créer une explosion de particules de succès
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 6px;
                height: 6px;
                background: ${i % 2 === 0 ? 'var(--mystical-gold)' : 'var(--ethereal-turquoise)'};
                border-radius: 50%;
                pointer-events: none;
                z-index: 1000;
                left: ${centerX}px;
                top: ${centerY}px;
                box-shadow: 0 0 10px currentColor;
            `;
            
            document.body.appendChild(particle);
            
            const angle = (i / 20) * Math.PI * 2;
            const distance = 100 + Math.random() * 100;
            const duration = 2000 + Math.random() * 1000;
            
            particle.animate([
                { 
                    opacity: 1,
                    transform: 'scale(1) translate(0, 0)' 
                },
                { 
                    opacity: 0.8,
                    transform: `scale(1.5) translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)` 
                },
                { 
                    opacity: 0,
                    transform: `scale(0) translate(${Math.cos(angle) * distance * 1.2}px, ${Math.sin(angle) * distance * 1.2}px)` 
                }
            ], {
                duration: duration,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }).onfinish = () => {
                particle.remove();
            };
        }
    }

    resetForm() {
        this.form.reset();
        
        // Supprimer tous les messages et états
        const formGroups = this.form.querySelectorAll('.form-group');
        formGroups.forEach(group => {
            group.classList.remove('has-error', 'has-success', 'focused');
            const message = group.querySelector('.field-error, .field-success');
            if (message) {
                message.remove();
            }
        });
        
        const inputs = this.form.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.classList.remove('error', 'success');
        });
        
        this.removeFormMessage();
    }

    updateFieldMagic(field) {
        const formGroup = field.closest('.form-group');
        const sparkle = formGroup.querySelector('.input-sparkle');
        
        if (field.value.trim()) {
            formGroup.classList.add('has-content');
            if (sparkle) {
                sparkle.style.opacity = '0.6';
            }
        } else {
            formGroup.classList.remove('has-content');
            if (sparkle) {
                sparkle.style.opacity = '0';
            }
        }
    }
}

// Styles CSS pour les messages et effets
const contactFormCSS = `
    .form-group.has-error input,
    .form-group.has-error textarea,
    .form-group.has-error select {
        border-color: #ff6b6b;
        box-shadow: 0 0 15px rgba(255, 107, 107, 0.3);
    }
    
    .form-group.has-success input,
    .form-group.has-success textarea,
    .form-group.has-success select {
        border-color: var(--ethereal-turquoise);
        box-shadow: 0 0 15px rgba(78, 205, 196, 0.3);
    }
    
    .form-group.focused {
        position: relative;
        z-index: 10;
    }
    
    .field-error {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 8px;
        padding: 8px 12px;
        background: rgba(255, 107, 107, 0.1);
        border: 1px solid rgba(255, 107, 107, 0.3);
        border-radius: 8px;
        font-size: 0.85rem;
        color: #ff9999;
    }
    
    .field-success {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 8px;
        padding: 8px 12px;
        background: rgba(78, 205, 196, 0.1);
        border: 1px solid rgba(78, 205, 196, 0.3);
        border-radius: 8px;
        font-size: 0.85rem;
        color: var(--ethereal-turquoise);
    }
    
    .form-message {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-top: 20px;
        padding: 15px 20px;
        border-radius: 15px;
        font-size: 0.95rem;
        line-height: 1.5;
    }
    
    .form-error {
        background: rgba(255, 107, 107, 0.1);
        border: 1px solid rgba(255, 107, 107, 0.3);
        color: #ff9999;
    }
    
    .form-success {
        background: rgba(78, 205, 196, 0.1);
        border: 1px solid rgba(78, 205, 196, 0.3);
        color: var(--ethereal-turquoise);
    }
    
    .message-icon {
        font-size: 1.5rem;
        flex-shrink: 0;
    }
    
    .error-icon,
    .success-icon {
        flex-shrink: 0;
    }
    
    @media (max-width: 768px) {
        .field-error,
        .field-success,
        .form-message {
            font-size: 0.8rem;
            padding: 10px 12px;
        }
        
        .message-icon {
            font-size: 1.2rem;
        }
    }
`;

// Injection des styles
const contactStyle = document.createElement('style');
contactStyle.textContent = contactFormCSS;
document.head.appendChild(contactStyle);

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    new EnchantedContactForm();
});

// Export pour utilisation dans d'autres modules
window.EnchantedContactForm = EnchantedContactForm;