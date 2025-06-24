// Hopeless Coin - Interactive Elements
document.addEventListener('DOMContentLoaded', function() {
    
    // Price ticker that continuously goes down
    const priceElement = document.getElementById('price-ticker');
    let currentPrice = 0.00000001;
    
    function updatePrice() {
        // Randomly decrease price by 1-10%
        const decreasePercent = Math.random() * 0.09 + 0.01; // 1-10%
        currentPrice = currentPrice * (1 - decreasePercent);
        
        // Format to scientific notation when it gets too small
        if (currentPrice < 0.000000001) {
            priceElement.textContent = currentPrice.toExponential(2);
        } else {
            priceElement.textContent = '$' + currentPrice.toFixed(8);
        }
    }
    
    // Update price every 3 seconds
    setInterval(updatePrice, 3000);
    
    // Days counter that increases
    const daysElement = document.getElementById('days-counter');
    let daysSinceGreen = 1247;
    
    function updateDaysCounter() {
        daysSinceGreen++;
        daysElement.textContent = daysSinceGreen.toLocaleString();
    }
    
    // Update days counter every 10 seconds for dramatic effect
    setInterval(updateDaysCounter, 10000);
    
    // Hopeless messages for various interactions
    const hopelessMessages = [
        "Save your money. This won't help.",
        "Why are you still trying?",
        "The definition of insanity is...",
        "Your portfolio called. It's disappointed.",
        "Maybe try a savings account instead?",
        "This is why you can't have nice things.",
        "Diamond hands, empty pockets.",
        "HODL stands for 'Hold On to Delusion, Losers'",
        "The only moon you'll see is outside your window.",
        "Congratulations, you played yourself."
    ];
    
    function getRandomHopelessMessage() {
        return hopelessMessages[Math.floor(Math.random() * hopelessMessages.length)];
    }
    
    // Buy button functionality
    const buyButton = document.getElementById('buy-btn');
    let buyClickCount = 0;
    
    buyButton.addEventListener('click', function(e) {
        e.preventDefault();
        buyClickCount++;
        
        const originalText = buyButton.textContent;
        const message = getRandomHopelessMessage();
        
        buyButton.textContent = message;
        buyButton.style.background = '#666666';
        buyButton.style.transform = 'translateY(0)';
        buyButton.disabled = true;
        
        // Reset button after 3 seconds
        setTimeout(() => {
            if (buyClickCount >= 5) {
                buyButton.textContent = "Stop Clicking This";
                buyButton.style.background = '#444444';
            } else {
                buyButton.textContent = originalText;
                buyButton.style.background = 'var(--color-primary)';
                buyButton.disabled = false;
            }
        }, 3000);
        
        // Add some visual feedback
        createFloatingText(e.target, "💸 Money Gone!");
    });
    
    // Social media links that go nowhere
    const socialLinks = document.querySelectorAll('.footer-link');
    const socialMessages = {
        'Twitter': "Our last tweet was 'gm' 847 days ago.",
        'Discord': "Server has 3 members. All bots.",
        'Telegram': "Channel exists. Nobody talks."
    };
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.textContent;
            const message = socialMessages[platform] || "Link goes nowhere, like your investments.";
            
            showTemporaryMessage(this, message);
        });
    });
    
    // Function to show temporary messages
    function showTemporaryMessage(element, message) {
        const originalText = element.textContent;
        element.textContent = message;
        element.style.color = '#666666';
        
        setTimeout(() => {
            element.textContent = originalText;
            element.style.color = 'var(--color-primary)';
        }, 2000);
    }
    
    // Function to create floating text animation
    function createFloatingText(element, text) {
        const floatingText = document.createElement('div');
        floatingText.textContent = text;
        floatingText.style.cssText = `
            position: absolute;
            z-index: 1000;
            color: #ff4444;
            font-weight: bold;
            font-size: 14px;
            pointer-events: none;
            animation: floatUp 2s ease-out forwards;
        `;
        
        // Position relative to the clicked element
        const rect = element.getBoundingClientRect();
        floatingText.style.left = (rect.left + rect.width / 2) + 'px';
        floatingText.style.top = rect.top + 'px';
        
        document.body.appendChild(floatingText);
        
        // Remove after animation
        setTimeout(() => {
            floatingText.remove();
        }, 2000);
    }
    
    // Add floating animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            0% {
                transform: translateY(0) scale(1);
                opacity: 1;
            }
            100% {
                transform: translateY(-50px) scale(0.8);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Easter egg: Konami code for extra despair
    let konamiCode = [];
    const konamiSequence = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'KeyB', 'KeyA'
    ];
    
    document.addEventListener('keydown', function(e) {
        konamiCode.push(e.code);
        
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
            triggerUltimateDesair();
            konamiCode = [];
        }
    });
    
    function triggerUltimateDesair() {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            flex-direction: column;
            color: #d4af37;
            text-align: center;
            font-size: 24px;
            font-weight: bold;
        `;
        
        overlay.innerHTML = `
            <div style="max-width: 600px; padding: 20px;">
                <h2 style="margin-bottom: 20px; color: #d4af37;">🎉 Congratulations! 🎉</h2>
                <p style="margin-bottom: 20px;">You found the secret code!</p>
                <p style="margin-bottom: 20px; font-size: 18px; color: #888;">Your reward: The realization that you spent time looking for easter eggs on a fake crypto website instead of making money.</p>
                <p style="font-size: 16px; font-style: italic; color: #666;">This is why you're hopeless.</p>
                <button id="close-overlay" style="margin-top: 30px; padding: 10px 20px; background: var(--color-primary); color: #0a0a0a; border: none; border-radius: 5px; cursor: pointer; font-weight: bold;">Accept Defeat</button>
            </div>
        `;
        
        document.body.appendChild(overlay);
        
        document.getElementById('close-overlay').addEventListener('click', () => {
            overlay.remove();
        });
        
        // Auto-close after 10 seconds
        setTimeout(() => {
            if (overlay.parentNode) {
                overlay.remove();
            }
        }, 10000);
    }
    
    // Random despair facts that appear occasionally
    const despairFacts = [
        "Fact: 99.9% of crypto traders lose money.",
        "Did you know? Your 2017 portfolio is still down 90%.",
        "Fun fact: That 'diamond hands' strategy isn't working.",
        "Reality check: Your DCA strategy is just throwing good money after bad.",
        "Reminder: You could have just bought an index fund.",
        "Truth: The house always wins, and you're not the house."
    ];
    
    function showRandomDespairFact() {
        if (Math.random() < 0.1) { // 10% chance every interval
            const fact = despairFacts[Math.floor(Math.random() * despairFacts.length)];
            const factElement = document.createElement('div');
            factElement.textContent = fact;
            factElement.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: rgba(212, 175, 55, 0.1);
                border: 1px solid var(--color-primary);
                color: var(--color-primary);
                padding: 15px;
                border-radius: 8px;
                max-width: 300px;
                font-size: 14px;
                z-index: 1000;
                animation: slideIn 0.5s ease-out;
            `;
            
            document.body.appendChild(factElement);
            
            setTimeout(() => {
                factElement.style.animation = 'slideOut 0.5s ease-out forwards';
                setTimeout(() => factElement.remove(), 500);
            }, 4000);
        }
    }
    
    // Show random despair facts every 30 seconds
    setInterval(showRandomDespairFact, 30000);
    
    // Add slide animations
    const slideStyle = document.createElement('style');
    slideStyle.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(slideStyle);
    
    // Track user interaction for extra hopelessness
    let totalClicks = 0;
    document.addEventListener('click', function() {
        totalClicks++;
        
        if (totalClicks === 50) {
            showTemporaryMessage(document.querySelector('.tagline'), "50 clicks and still here? That's dedication to failure.");
        } else if (totalClicks === 100) {
            showTemporaryMessage(document.querySelector('.tagline'), "100 clicks. Your determination is almost admirable.");
        }
    });
    
    // Console messages for developers who inspect
    console.log("🎭 Welcome to the Hopeless Coin developer console!");
    console.log("💸 Looking for secrets? The only secret is that there are no secrets.");
    console.log("🚀 Moon mission status: Cancelled indefinitely");
    console.log("💎 Diamond hands achievement: Permanently clenched around worthless tokens");
    console.log("🎪 Remember: This is all just an elaborate joke, unlike your real crypto losses.");
    
    // Log fake API calls that fail
    setTimeout(() => {
        console.error("❌ Failed to connect to CoinGecko API: Coin too hopeless to track");
        console.error("❌ Failed to connect to DEX: No liquidity exists");
        console.error("❌ Failed to connect to community: Community doesn't exist");
    }, 2000);
    
    console.log("💡 Pro tip: Try the Konami code for a special surprise!");
    
});