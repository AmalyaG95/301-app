import Image from 'next/image';
import styles from './style.module.scss';
import Link from 'next/link';

export type NewsCardProps = {
  photoURrl: string;
  title: string;
  date: string;
  url: string;
};

const NewsCard = ({ photoURrl, title, date, url }: NewsCardProps) => {
  return (
    <div className={styles.container}>
      <article className={styles.wrapper}>
        <Link href={url}>
          <Image
            src={photoURrl}
            alt=""
            width={212}
            height={242}
            layout="responsive"
          />
        </Link>
        <div>
          <Link href={url}>
            <h3>{title}</h3>
          </Link>
          <span>{date}</span>
        </div>
      </article>
      <article className={styles.wrapper}>
        <Image
          src={photoURrl}
          alt=""
          width={171}
          height={191}
        />
        <div>
          <h3>{title}</h3>
          <span>{date}</span>
        </div>
      </article>
      <article className={styles.wrapper}>
        <Image
          src={photoURrl}
          alt=""
          width={171}
          height={191}
         />
        <div>
          <h3>{title}</h3>
          <span>{date}</span>
        </div>
      </article>
    </div>
  );
};

export default NewsCard;

/*
import React from "react";

import { Grid, Typography, useTheme } from "@mui/material";
import useMediaQuery from "hooks/useMediaQuery/useMediaQuery";
import { getCMSImageSource } from "lib/cms-sdk/utils/image";
import { DonationExampleType } from "models/landingCollectModel";
import Image from "next/image";

import BgCard from "public/bgCard.svg?url";
import EqualSVG from "public/equal.svg?url";

import CustomMarkdown from "../../Markdown/Custom";

interface CardExampleProps {
  example: DonationExampleType;
}

const CardExample = ({
  example: { image, title, subtitle, description },
}: CardExampleProps) => {
  const theme = useTheme();
  const isDown390 = useMediaQuery("@media (max-width: 390px)");

  const imageUrl = getCMSImageSource(image);

  return (
    <Grid
      container
      direction="column"
      sx={{
        background: `url(${BgCard}) no-repeat `,
        backgroundPosition: "100% 164px",
        maxWidth: "314px",
        borderRadius: "10px",
        boxShadow: "0px 1px 16px 0px rgba(34, 42, 50, 0.20)",
      }}
    >
      <Grid item>
        <div
          style={{
            width: "100%",
            height: `${isDown390 ? "188px" : "192px"}`,
          }}
        >
          <Image
            loader={() => imageUrl}
            src={imageUrl}
            alt=""
            width={314}
            height={192}
            layout="responsive"
            objectFit="cover"
            style={{
              borderRadius: "10px 10px 0 0",
            }}
          />
        </div>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        direction="column"
        sx={{
          padding: "20px 22px 24px",
          gap: "16px",
          flexWrap: "nowrap",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: theme.fonts.commonBold,
            letterSpacing: "2px",
          }}
          style={{ fontSize: "24px" }}
        >
          {title}
          <Typography variant={"body1"} fontSize="18px">
            {subtitle}
          </Typography>
        </Typography>

        <Image src={EqualSVG} alt="" width={20} height={20} />
        <Typography
          variant={"body1"}
          fontSize="20px"
          sx={{
            fontFamily: theme.fonts.commonBold,
            lineHeight: "normal",
            fontWeight: 600,
          }}
        >
          <CustomMarkdown content={description} />
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CardExample;

*/
