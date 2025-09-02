import HomePageContent from "../../components/HomePageContent";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { GetServerSidePropsContext } from "next";
import MainLayout from "../../components/Layout/MainLayout";

export default function Home() {
  return (
    <MainLayout title="Home">
      <HomePageContent />
    </MainLayout>
  );
}
