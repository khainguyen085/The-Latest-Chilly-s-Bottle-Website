const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,

})

sr.reveal(`.info-container`, {delay: 300})
sr.reveal(`.info-img`,{origin: 'right', delay: 300})
sr.reveal(`.social`,{origin:'left',delay: 300})
sr.reveal(`.product-sign`,{delay:300})
sr.reveal(`.about-us--title`,{delay:300})
sr.reveal(`.about-us--content`,{delay:300})
sr.reveal(`.about-us--right`,{origin:'right',delay:300})
sr.reveal(`.about-us--left`,{origin:'left',delay:300})
sr.reveal(`.pricing-title`,{delay:300})
sr.reveal(`.card`,{delay:300})
sr.reveal(`.client-title`,{delay:300})
sr.reveal(`.client-card`,{origin:'bottom',delay:300})

