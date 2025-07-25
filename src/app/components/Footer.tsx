import styles from '../page.module.scss'

export function Footer() {
    return (<div className={`${styles.contentSection} ${styles.footer}`}>
        <div className={styles.footerMainLinks}>
            <span className="v-typography-body-2">
                Made by{" "}
                <a aria-label="Carter Hawks (opens a new tab)" className="v-link v-link-no-underline" href="https://design.stellaric.pw/" rel="noreferrer noopener" target="_blank">
                    Carter Hawks
                    <svg aria-hidden="true" className={"v-icon v-icon-generic v-icon-tiny v-icon-information"} focusable="false" viewBox="0 0 16 16">
                        <svg v-icon-visa-maximize-tiny={"true"} aria-label="visa maximize tiny" />
                    </svg>

                </a>
            </span>
            <span className="v-typography-body-2" style={{ textAlign: 'right' }}>
                Browse source on{" "}
                <a aria-label="VISA Component Suggester on GitHub (opens a new tab)" className="v-link v-link-no-underline" href="https://github.com/ckhawks/visa-component-suggester" rel="noreferrer noopener" target="_blank">
                    GitHub
                    <svg aria-hidden="true" className={"v-icon v-icon-generic v-icon-tiny v-icon-information"} focusable="false" viewBox="0 0 16 16">
                        <svg v-icon-visa-maximize-tiny={"true"} aria-label="visa maximize tiny" />
                    </svg>
                </a>
            </span>
        </div>
        <div className={styles.footerLowerNotices}>
            <span className="v-typography-body-2" style={{ textAlign: 'right' }}>
                This project is not in any way affiliated or representative of VISA.
            </span>
        </div>

    </div>);
}