import { Container, Flex } from "@chakra-ui/layout";
import { Grid } from "@chakra-ui/react";
import MemberCard from "../component/MemberCard";
import NavBar from "../component/NavBar";

function Equipe() {
  return (
    <Container W="lg">
      <Grid
        gridTemplateColumns={{
          base: "auto",
          lg: "repeat(3, auto)",
          xl: "repeat(4, auto)",
        }}
        gap="10px"
        mt="20px"
      >
        <MemberCard name="Marcos Ântonio" />
        <MemberCard name="Joel Morais" />
        <MemberCard name="Lucca" />
        <MemberCard name="Felipe Melgaço" />
      </Grid>
    </Container>
  );
}

export default Equipe;
