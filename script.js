* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Courier New', monospace;
    background: #ffffff;
    color: #000000;
    line-height: 1.6;
}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    background: #000000;
    color: #ffffff;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

.nav-brand {
    font-weight: bold;
    font-size: 1.2rem;
    letter-spacing: 1px;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;
}

.nav-links a:hover {
    color: #ffff00;
}

.hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 100px 40px 60px;
    background: #f8f8f8;
}

.hero-avatar {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    border: 4px solid #000000;
    margin-bottom: 2rem;
    object-fit: cover;
}

.hero-title {
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
}

.hero-subtitle {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    background: #ffff00;
    padding: 8px 20px;
    display: inline-block;
    font-weight: bold;
}

.hero-description {
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto;
    color: #333;
}

.portfolio {
    padding: 80px 40px;
    background: #ffffff;
}

.section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 4rem;
    text-transform: uppercase;
    position: relative;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: #000000;
}

.project {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin-bottom: 5rem;
    padding: 0;
}

.project-image img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border: 3px solid #000000;
    transition: transform 0.3s;
}

.project-image img:hover {
    transform: scale(1.02);
}

.project-info h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: #000000;
    color: #ffffff;
}

.project-info p {
    margin-bottom: 1.2rem;
    font-size: 1.1rem;
    color: #333;
}

.contact {
    padding: 80px 40px;
    text-align: center;
    background: #000000;
    color: #ffffff;
}

.contact .section-title::after {
    background: #ffff00;
}

.contact-links {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin-top: 3rem;
}

.contact-links a {
    color: #ffff00;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;
    padding: 12px 24px;
    border: 2px solid #ffff00;
    transition: all 0.3s;
}

.contact-links a:hover {
    background: #ffff00;
    color: #000000;
}

@media (max-width: 768px) {
    .project {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .nav {
        padding: 15px 20px;
    }
    
    .nav-links {
        gap: 1rem;
    }
    
    .contact-links {
        flex-direction: column;
        gap: 1rem;
    }
}