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
        <Link href="https://www.instagram.com/e_commerce_kg/">
          <InstagramIcon style={{fill: "pink"}}/>
        </Link>
        <Link href="https://tttttt.me/AMAzone_telegram">
          <TelegramIcon style={{fill: "blue"}}/>
        </Link>
        <Link href="https://www.youtube.com/channel/UCxrshyKUTQDsbKtuXzDLJbg">
          <YouTubeIcon style={{fill: "red"}}/>
        </Link>
        <Link href="https://wa.link/hwd7jx">
          <WhatsAppIcon style={{fill: "green"}}/>
        </Link>
    </Stack>
  );
}