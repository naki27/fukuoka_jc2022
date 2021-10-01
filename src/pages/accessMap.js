import React from 'react';

import { Container, Breadcrumbs, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LinkIcon from '@material-ui/icons/Link';

import H1 from '~/components/H1';
import Header from "~/components/Header";
import Gutter from "~/components/Gutter";
import Footer from "~/components/Footer";
import Link from "~/components/Link";

import Image from 'next/image';

import kasugaSportCenter from '../../public/maps/kasugaSportCenter.jpg';
import parkingMap from '../../public/maps/map_fk.jpg';

const componentsStyle = {
    // container,
    root: {
      padding: "0",
      width: "100vw",
      maxWidth: "1280px",
      margin: "0 auto",
    },
    institution: {
        borderCollapse: "collapse",
        width: "100%",
        marginLeft: "32px",
        "& th, td": {
            border: "solid 1px #aaaaaa",
            padding: "10px",
        },
        "& th": {
            background: "#aaaaaa",
            color: "#fff",
            width: "15vw",
        },
    },
    link: {
        marginLeft: "8px",
        color: "#393939",
    },
    googleMap: {
        height: "0",
        overflow: "hidden",
        paddingBottom: "56.25%",
        position: "relative",
        margin: "32px 0",
        "& iframe": {
            position: "absolute",
            left: "0",
            top: "0",
            height: "100%",
            width: "100%",
        },
    },
    "@media (max-width: 540px)": {
        institution: {
            width: "96%",
            margin: "8px",
        },
        googleMap: {
            height: "512px",
        }
    },
}
const useStyles = makeStyles(componentsStyle);

const accessMap = () => {
    const classes = useStyles();

    return (
        <>
            <Header />
            <Gutter />
            <Container className={classes.root} maxWidth={false}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" href="/">
                        トップ
                    </Link>
                    <Typography color="textPrimary">アクセスマップ</Typography>
                </Breadcrumbs>
                <H1 title="アクセスマップ" />

                <div className="fixed2column">
                    <Image src={kasugaSportCenter} width="384" height="256"/>
                    <table className={classes.institution}>
                        <tbody>
                            <tr>
                                <th>施設名称</th>
                                <td>
                                    春日市総合スポーツセンター
                                    <div style={{verticalAlign: "middle", display: "inline"}}>
                                        <Link href="https://information.konamisportsclub.jp/trust/kasuga/" target="_blank" className={classes.link}>
                                            <LinkIcon />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th>住所</th>
                                <td>
                                    <p>〒816-0831</p>
                                    <p>福岡県春日市大谷6-28</p>
                                </td>
                            </tr>
                            <tr>
                                <th>TEL</th>
                                <td>092-571-3234</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className={classes.googleMap}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.029864665791!2d130.45322791526152!3d33.526609152693226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x354190b716f33819%3A0x84cee7fe7581dfd7!2z5pil5pel5biC57eP5ZCI44K544Od44O844OE44K744Oz44K_44O8!5e0!3m2!1sja!2sjp!4v1626922065727!5m2!1sja!2sjp"
                    width="100%" height="auto" style={{border:0}} loading="lazy"></iframe>
                </div>

                <H1 title="駐車場はこちら" />
                <Image src={parkingMap} objectFit="contain"/>

            </Container>
            <Footer />
        </>
    );
};

export default accessMap;