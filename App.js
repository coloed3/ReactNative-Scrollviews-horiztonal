import React from "react";
import { ScrollView, SafeAreaView } from "react-native";
import Card from "./components/Card";
import styled from "styled-components";
import { NotificationIcon } from "./components/Icons";
import { Logo } from "./components/Logo";
import { Courses } from "./components/Course";

export default function App() {
  return (
    <Container>
      <SafeAreaView>
        <ScrollView>
          <TitleBar>
            <Avatar source={require("./assets/avatar.jpg")} />
            <Title>Welcome Back</Title>
            <Name> Eddie</Name>
            <NotificationIcon
              width={24}
              height={24}
              fill="#4775f2"
              style={{ position: "absolute", right: 20, top: 5 }}
            />
          </TitleBar>

          <ScrollView
            style={{
              flexDirection: "row",
              padding: 20,
              paddingLeft: 12,
              paddingTop: 30,
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {logos.map((logo, idx) => (
              <Logo keys={logo.idx} image={logo.image} text={logo.text} />
            ))}
          </ScrollView>
          <Subtitle>Continue Learning</Subtitle>
          <ScrollView
            horizontal={true}
            styles={{ paddingBottom: 30 }}
            showsHorizontalScrollIndicator={false}
          >
            {cards.map((card, idx) => (
              <Card
                Keys={card.idx}
                title={card.title}
                image={card.image}
                caption={card.caption}
                subtitle={card.subtitle}
                logo={card.logo}
              />
            ))}
          </ScrollView>
          <Subtitle>Popular Courses </Subtitle>

          {courses.map((course, idx) => (
            <Courses
              key={idx}
              image={course.image}
              title={course.title}
              caption={course.caption}
              subtitle={course.subtitle}
              logo={course.logo}
              avatar={course.avatar}
              author={course.author}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </Container>
  );
}

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-top: 20px;
  margin-left: 20px;
  text-transform: uppercase;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;
const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;

  padding-left: 80px;
`;

//data

export const logos = [
  {
    image: require("./assets/logo-framerx.png"),
    text: "Framer X",
  },
  {
    image: require("./assets/logo-figma.png"),
    text: "Figma",
  },

  {
    image: require("./assets/logo-studio.png"),
    text: "Studio",
  },
  {
    image: require("./assets/logo-react.png"),
    text: "React",
  },
  {
    image: require("./assets/logo-swift.png"),
    text: "Swift",
  },
  {
    image: require("./assets/logo-sketch.png"),
    text: "Sketch",
  },
];

const cards = [
  {
    title: "React Native for Designers",
    image: require("./assets/background13.jpg"),
    subtitle: "React Native",
    caption: "1 of 12 sections",
    logo: require("./assets/logo-react.png"),
  },

  {
    title: "Why is Eddie so good ",
    image: require("./assets/background12.jpg"),
    subtitle: "Learning is Fun",
    caption: "Dont be that guy",
    logo: require("./assets/logo-figma.png"),
  },
  {
    title: "Making coding work ",
    image: require("./assets/background5.jpg"),
    subtitle: "WebStorm > nova",
    caption: "1 of 12 sections",
    logo: require("./assets/logo-framerx.png"),
  },
  {
    title: "Better then sublime text",
    image: require("./assets/background14.jpg"),
    subtitle: "I lied sublime is goat",
    caption: "1 of 12 sections",
    logo: require("./assets/logo-sketch.png"),
  },
];

const courses = [
  {
    title: "Prototype in InVision Studio",
    subtitle: "10 sections",
    image: require("./assets/background13.jpg"),
    logo: require("./assets/logo-studio.png"),
    author: "Meng To",
    avatar: require("./assets/avatar.jpg"),
    caption: "Design and interactive prototype",
  },
  {
    title: "React for Designers",
    subtitle: "12 sections",
    image: require("./assets/background11.jpg"),
    logo: require("./assets/logo-react.png"),
    author: "Meng To",
    avatar: require("./assets/avatar.jpg"),
    caption: "Learn to design and code a React site",
  },
  {
    title: "Design and Code with Framer X",
    subtitle: "10 sections",
    image: require("./assets/background14.jpg"),
    logo: require("./assets/logo-framerx.png"),
    author: "Meng To",
    avatar: require("./assets/avatar.jpg"),
    caption: "Create powerful design and code components for your app",
  },
  {
    title: "Design System in Figma",
    subtitle: "10 sections",
    image: require("./assets/background6.jpg"),
    logo: require("./assets/logo-figma.png"),
    author: "Meng To",
    avatar: require("./assets/avatar.jpg"),
    caption:
      "Complete guide to designing a site using a collaborative design tool",
  },
];
