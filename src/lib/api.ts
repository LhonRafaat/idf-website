import { IMember } from "./interfaces";

export class MembersData {
  private readonly API_URL =
    "https://api.gametools.network/bfglobal/detailedplatoon/?platform=pc&lang=en-us&id=";

  async getBfvMembers() {
    const response = await fetch(
      this.API_URL + "fbc7c5ab-c125-41f9-be8c-f367c03b2551"
    );
    const data: { members: Array<IMember> } = await response.json();
    return data.members;
  }

  async getBf1Members() {
    const response = await fetch(
      this.API_URL + "1c415055-a35c-4967-963b-c44a4ba977e9"
    );
    const data: { members: Array<IMember> } = await response.json();
    return data.members;
  }
}
