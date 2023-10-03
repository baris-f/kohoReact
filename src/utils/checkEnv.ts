import formatKRW from "@/utils/formatKRW";

const checkEnvironment = () => {
    let base_url =
        process.env.NODE_ENV === "development"
            ? "http://localhost:3000"
            : "https://github.com/baris-f/kohoreact";

    return base_url;
};

export default checkEnvironment;