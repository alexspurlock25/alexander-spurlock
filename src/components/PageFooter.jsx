const styles = {
    footer: 'mt-auto py-5 grid grid-flow-col auto-rows-cols-max justify-items-center content-center h-16 text-white',
    a: 'bg-black w-20 h-10 grid content-center text-center rounded shadow hover:shadow-lg hover:translate-y-px duration-200'
}

const PageFooter = () => {
    return (
        <footer className={ styles.footer }>
            <a className={ styles.a } href='https://docs.google.com/document/d/e/2PACX-1vRFfqGpshZO3LFxjqCP5WHWlUIun2ikTeoCAlP5FOWzPjRe8qQgKk5YI51KGwGT9Fo88l7N825Prz-6/pub' target='_blank'>Resume</a>
            <a className={ styles.a } href='https://github.com/alexspurlock25' target='_blank'>GitHub</a>
        </footer>
    )
}

export default PageFooter
