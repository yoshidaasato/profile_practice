"use client";
import React from "react";
import { Button , Container } from "@mui/material";
import Link from 'next/link';


function page() {
  return (
    <div>
      <Container>
        名前：吉田和誠
        <br />
        ふりがな：よしだあさと
        <br />
        学年：2年
        <br />
        学部：情報科学部
        <br />
        学科：情報工学科
        <br />
        ひとこと：よろしくお願いします。
        <br />
        <Link href="https://github.com/yoshidaasato" passHref>
            <Button variant="contained" color="primary">
                gitアカウントはこちらから
            </Button>
        </Link>
        <Link href="/" passHref>
            <Button variant="contained" color="secondary">
                戻る
            </Button>
        </Link> 
      </Container>
    </div>

  );
}

export default page;