<template>
  <div>
    <One></One>
    <Two></Two>
    <Three></Three>
    <Four></Four>
    <Five></Five>
  </div>
</template>

<script>
import One from "./components/one";
import Two from "./components/two";
import Three from "./components/Three";
import Four from "./components/four";
import Five from "./components/five";

export default {
  name: "Home",
  components: { Five, Four, Three, One, Two }
};
</script>

<style scoped></style>
