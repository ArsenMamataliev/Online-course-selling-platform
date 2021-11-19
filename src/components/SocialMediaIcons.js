import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

export default function SocialMediaIcons() {
  return (
    <Stack direction="row" justifyContent="center" spacing={2}>
        <Link href="https://www.instagram.com/amazon_forseller/">
          <InstagramIcon style={{fill: "pink"}}/>
        </Link>
        <Link href="#">
          <TelegramIcon style={{fill: "blue"}}/>
        </Link>
        <Link href="#">
          <YouTubeIcon style={{fill: "red"}}/>
        </Link>
        <Link href="#">
          <WhatsAppIcon style={{fill: "green"}}/>
        </Link>
    </Stack>
  );
}