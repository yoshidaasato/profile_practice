import { Button, Container, Stack } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 4 }}>
      <h2 className="mb-5">2025年度 システム局自己紹介</h2>
      <Stack direction="column" spacing={2} alignItems="center">
        <Link href="/profile1" passHref>
          <Button variant="contained" color="primary">
            Profile 1
          </Button>
        </Link>
        <Link href="/profile2" passHref>
          <Button variant="contained" color="primary">
            Profile 2
          </Button>
        </Link>
        <Link href="/profile3" passHref>
          <Button variant="contained" color="primary">
            Profile 3
          </Button>
        </Link>
        <Link href="/profile4" passHref>
          <Button variant="contained" color="primary">
            Profile 4
          </Button>
        </Link>
        <Link href="/profile5" passHref>
          <Button variant="contained" color="primary">
            Profile 5
          </Button>
        </Link>
        <Link href="/profile6" passHref>
          <Button variant="contained" color="primary">
            Profile 6
          </Button>
        </Link>
        <Link href="/profile7" passHref>
          <Button variant="contained" color="primary">
            Profile 7
          </Button>
        </Link>
      </Stack>
    </Container>
  );
}
