export default async ():Promise<Record<string, any>> => {
    const response = await fetch("https://public-api.birdeye.so/public/price/?address=So11111111111111111111111111111111111111112");

    const json = await response.json();

    const {
        value,
    } = json.data;
    
    return value;
};