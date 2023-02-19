import React from 'react'
import Box from '@mui/material/Box';
import { FooterContainer, FooterMenu, UlItems, footerStyles } from './styles';
import { Typography } from '@material-ui/core';

const Footer = () => {
    const footerClasses = footerStyles();
  return (
    <Box className={footerClasses.footerMain}>
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} width={'100%'} alignItems={'center'}>
            <FooterContainer>
                <FooterMenu>
                    <UlItems>
                        <li className={footerClasses.liItems}>
                            <a href="#">About</a>
                        </li>
                        <li className={footerClasses.liItems}>
                            <a href="#">Contact</a>
                        </li>
                        <li className={footerClasses.liItems}>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li className={footerClasses.liItems}>
                            <a href="#">Terms of Service</a>
                        </li>
                    </UlItems>
                    <UlItems>
                        <li className={footerClasses.liItems}>
                            <a href="#">FAQ</a>
                        </li>
                        <li className={footerClasses.liItems}>
                            <a href="#">Blog</a>
                        </li>
                        <li className={footerClasses.liItems}>
                            <a href="#">Careers</a>
                        </li>
                        <li className={footerClasses.liItems}>
                            <a href="#">Press</a>
                        </li>
                    </UlItems>
                    <UlItems>
                        <li className={footerClasses.liItems}>
                            <a href="#">Help</a>
                        </li>
                        <li className={footerClasses.liItems}>
                            <a href="#">Support</a>
                        </li>
                        <li className={footerClasses.liItems}>
                            <a href="#">Sitemap</a>
                        </li>
                        <li className={footerClasses.liItems}>
                            <a href="#">Legal</a>
                        </li>
                    </UlItems>
                </FooterMenu>
            </FooterContainer>
            <Box display={'grid'} width={'80%'} justifyContent={'center'} padding={'1em'} >
                <Typography variant='h6'>
                        copyright
                </Typography>
            </Box>
        </Box>
    </Box>
  )
}
export default Footer;
