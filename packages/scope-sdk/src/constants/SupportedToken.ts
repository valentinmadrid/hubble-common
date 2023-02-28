export const SupportedTokens = [
  'SOL',
  'ETH',
  'BTC',
  'wBTC',
  'SRM',
  'RAY',
  'FTT',
  'MSOL',
  'scnSOL',
  'BNB',
  'AVAX',
  'daoSOL',
  'USDH',
  'cSOL',
  'cETH',
  'cBTC',
  'cMSOL',
  'wstETH',
  'LDO',
  'USDC',
  'cUSDC',
  'USDT',
  'ORCA',
  'MNDE',
  'HBB',
  'cORCA',
  'cSLND',
  'cSRM',
  'cRAY',
  'cFTT',
  'cSTSOL',
  'SLND',
  'JSOL',
  'DAI',
  'USH',
  'UXD',
  'USDHTwap',
  'USHTwap',
  'UXDTwap',
  'HDG',
  'DUST',
  'kUSDHUSDCOrca',
  'kSOLSTSOLOrca',
  'kUSDCUSDTOrca',
  'kUSHUSDCOrca',
  'USDRTwap',
  'USDR',
  'RATIO',
  'UXP',
  'kUXDUSDCOrca',
  'JITOSOL',
  'SOLEma',
  'ETHEma',
  'BTCEma',
  'SRMEma',
  'RAYEma',
  'FTTEma',
  'MSOLTwap',
  'BNBEma',
  'AVAXEma',
  'USDCEma',
  'USDTEma',
  'DAIEma',
  'DUSTTwap',
  'BONK',
  'BONKTwap',
  'SAMO',
  'SAMOTwap',
  'bSOL',
  'LaineSOL',
  'HADES',
  'HADESTwap',
  'STSOL',
  'STSOLTwap',
  'RLB',
  'RLBTwap',
  'CGNTSOL',
] as const;
export type SupportedToken = (typeof SupportedTokens)[number];
