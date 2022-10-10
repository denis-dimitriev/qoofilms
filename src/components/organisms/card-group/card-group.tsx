import { Card } from "../../molecules/card/card";
import { avatarBanner } from "../../../assets/img";

export const CardGroup = () => {
  return (
    <div className="mt-5 flex w-full flex-col gap-y-5">
      <h1 className="text-2xl font-bold">Most popular</h1>
      <div className="flex w-full flex-wrap justify-center gap-y-5">
        <Card title={"Avatar"} thumbnail={avatarBanner} />
        <Card title={"Avatar"} thumbnail={avatarBanner} />
        <Card title={"Avatar"} thumbnail={avatarBanner} />
        <Card title={"Avatar"} thumbnail={avatarBanner} />
        <Card title={"Avatar"} thumbnail={avatarBanner} />
        <Card title={"Avatar"} thumbnail={avatarBanner} />
        <Card title={"Avatar"} thumbnail={avatarBanner} />
        <Card title={"Avatar"} thumbnail={avatarBanner} />
        <Card title={"Avatar"} thumbnail={avatarBanner} />
      </div>
    </div>
  );
};
