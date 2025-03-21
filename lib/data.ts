// Stock data
export const stocksData = [
  {
    id: 1,
    name: "Reliance Industries",
    ticker: "RELIANCE",
    price: 2450.75,
    change: 1.25,
    marketCap: "16.5T",
    volume: "2.3M",
  },
  {
    id: 2,
    name: "HDFC Bank",
    ticker: "HDFCBANK",
    price: 1678.3,
    change: -0.45,
    marketCap: "9.3T",
    volume: "1.8M",
  },
  {
    id: 3,
    name: "Infosys",
    ticker: "INFY",
    price: 1450.6,
    change: 0.85,
    marketCap: "6.1T",
    volume: "1.5M",
  },
  {
    id: 4,
    name: "Tata Consultancy Services",
    ticker: "TCS",
    price: 3250.25,
    change: 0.35,
    marketCap: "11.9T",
    volume: "0.9M",
  },
  {
    id: 5,
    name: "ICICI Bank",
    ticker: "ICICIBANK",
    price: 945.5,
    change: 1.75,
    marketCap: "6.6T",
    volume: "2.1M",
  },
  {
    id: 6,
    name: "Hindustan Unilever",
    ticker: "HINDUNILVR",
    price: 2560.15,
    change: -0.25,
    marketCap: "6.0T",
    volume: "0.7M",
  },
  {
    id: 7,
    name: "Bharti Airtel",
    ticker: "BHARTIARTL",
    price: 865.3,
    change: 2.15,
    marketCap: "4.8T",
    volume: "1.2M",
  },
  {
    id: 8,
    name: "ITC",
    ticker: "ITC",
    price: 415.75,
    change: 0.55,
    marketCap: "5.2T",
    volume: "3.5M",
  },
]

export const userStocks = [
  {
    id: 1,
    name: "Reliance Industries",
    ticker: "RELIANCE",
    price: 2450.75,
    change: 1.25,
    quantity: 10,
    avgBuyPrice: 2350.5,
    totalValue: 24507.5,
    profit: 1002.5,
    profitPercentage: 4.26,
  },
  {
    id: 3,
    name: "Infosys",
    ticker: "INFY",
    price: 1450.6,
    change: 0.85,
    quantity: 15,
    avgBuyPrice: 1380.25,
    totalValue: 21759.0,
    profit: 1055.25,
    profitPercentage: 5.1,
  },
  {
    id: 5,
    name: "ICICI Bank",
    ticker: "ICICIBANK",
    price: 945.5,
    change: 1.75,
    quantity: 20,
    avgBuyPrice: 920.75,
    totalValue: 18910.0,
    profit: 495.0,
    profitPercentage: 2.69,
  },
]

// Crypto data
export const cryptoData = [
  {
    id: 1,
    name: "Bitcoin",
    ticker: "BTC",
    price: 3750000,
    change: 2.35,
    marketCap: "72.5T",
    volume: "2.1T",
  },
  {
    id: 2,
    name: "Ethereum",
    ticker: "ETH",
    price: 175000,
    change: 1.75,
    marketCap: "21.3T",
    volume: "1.2T",
  },
  {
    id: 3,
    name: "Binance Coin",
    ticker: "BNB",
    price: 32500,
    change: -0.85,
    marketCap: "5.1T",
    volume: "0.4T",
  },
  {
    id: 4,
    name: "Solana",
    ticker: "SOL",
    price: 8500,
    change: 3.45,
    marketCap: "3.6T",
    volume: "0.3T",
  },
  {
    id: 5,
    name: "Cardano",
    ticker: "ADA",
    price: 45.75,
    change: -1.25,
    marketCap: "1.6T",
    volume: "0.1T",
  },
  {
    id: 6,
    name: "XRP",
    ticker: "XRP",
    price: 55.3,
    change: 0.65,
    marketCap: "2.9T",
    volume: "0.2T",
  },
]

export const userCrypto = [
  {
    id: 2,
    name: "Ethereum",
    ticker: "ETH",
    price: 175000,
    change: 1.75,
    quantity: 0.2,
    avgBuyPrice: 165000,
    totalValue: 35000,
    profit: 2000,
    profitPercentage: 6.06,
  },
  {
    id: 4,
    name: "Solana",
    ticker: "SOL",
    price: 8500,
    change: 3.45,
    quantity: 2.5,
    avgBuyPrice: 7800,
    totalValue: 21250,
    profit: 1750,
    profitPercentage: 8.97,
  },
]

// Insurance data
export const insuranceData = [
  {
    id: 1,
    name: "HDFC Life Insurance",
    type: "Term Life",
    premium: 12000,
    coverage: "1 Crore",
    term: "25 years",
    provider: "HDFC Life",
  },
  {
    id: 2,
    name: "ICICI Lombard Health Insurance",
    type: "Health",
    premium: 18000,
    coverage: "10 Lakhs",
    term: "1 year",
    provider: "ICICI Lombard",
  },
  {
    id: 3,
    name: "Bajaj Allianz Car Insurance",
    type: "Vehicle",
    premium: 8500,
    coverage: "5 Lakhs",
    term: "1 year",
    provider: "Bajaj Allianz",
  },
  {
    id: 4,
    name: "LIC Jeevan Anand",
    type: "Endowment",
    premium: 24000,
    coverage: "25 Lakhs",
    term: "20 years",
    provider: "LIC",
  },
  {
    id: 5,
    name: "Max Life Smart Wealth Plan",
    type: "ULIP",
    premium: 50000,
    coverage: "10 Lakhs",
    term: "15 years",
    provider: "Max Life",
  },
  {
    id: 6,
    name: "SBI Life Retire Smart",
    type: "Pension",
    premium: 100000,
    coverage: "NA",
    term: "Till retirement",
    provider: "SBI Life",
  },
]

export const userInsurance = [
  {
    id: 1,
    name: "HDFC Life Insurance",
    type: "Term Life",
    premium: 12000,
    coverage: "1 Crore",
    term: "25 years",
    provider: "HDFC Life",
    nextPremiumDate: "Apr 15, 2025",
    startDate: "Apr 15, 2020",
  },
  {
    id: 2,
    name: "ICICI Lombard Health Insurance",
    type: "Health",
    premium: 18000,
    coverage: "10 Lakhs",
    term: "1 year",
    provider: "ICICI Lombard",
    nextPremiumDate: "Jun 30, 2025",
    startDate: "Jun 30, 2022",
  },
]

