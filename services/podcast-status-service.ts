export const statusInfo = async () =>{
    
  return {
    status: 'ok',
    message: 'Podcast API is online',
    uptime: process.uptime().toFixed(2) + 's',
    timestamp: new Date().toISOString(),
  };
}