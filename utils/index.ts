export const generateLink = (url: string) => {

  console.log(process.env.DOMAIN_FRONTEND);
  

  return process.env.DOMAIN_FRONTEND + url + "/";
};
