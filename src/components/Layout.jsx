export default function Layout(props) {
    
    const { children } = props 

    const header = (
        <header> 

          <h1 className ="text-gradient">Regimen</h1>      
        <p><strong> The 30 simple workout program</strong> </p>
        </header>
    )

    const footer = (
        <footer>
        <p> Built by <a href = "https://www.linkedin.com/in/richard-arcos-44882821b/" target = "_blank">Richard Arcos </a><br /> Styled with <a href ="https://www.fantacss.smoljames.com/" target ="_blank"> FantaCSS</a>  </p>
        </footer>
    )


    return (
        <>
                {header}
                {children}
                {footer}
                </>
    )
}