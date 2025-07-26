import { VisaMaximizeTiny } from '@visa/nova-icons-react';
import styles from '../page.module.scss'
import { Link, Typography } from '@visa/nova-react';

export function Footer() {
    return (<div className={`${styles.contentSection} ${styles.footer}`}>
        <div className={styles.footerMainLinks}>
            <Typography variant="body-2">
                Made by{" "}
                <Link
                    aria-label="Carter Hawks (opens in a new tab)"
                    href="https://design.stellaric.pw"
                    noUnderline
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Carter Hawks
                    <VisaMaximizeTiny />
                </Link>
            </Typography>
            <Typography variant="body-2" style={{ textAlign: 'right' }}>
                Browse source on{" "}
                <Link
                    aria-label="VISA Component Suggester on GitHub (opens in a new tab)"
                    href="https://github.com/ckhawks/visa-component-suggester"
                    noUnderline
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                    <VisaMaximizeTiny />
                </Link>
            </Typography>
        </div>
        <div className={styles.footerLowerNotices}>
            <Typography variant="body-2" style={{ textAlign: 'right' }}  colorScheme="subtle">
                This project is not in any way affiliated or representative of VISA, and was made for an interview.
            </Typography>
        </div>

    </div>);
}