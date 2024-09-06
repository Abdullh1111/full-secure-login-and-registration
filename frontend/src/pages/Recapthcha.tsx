import ReCAPTCHA from "react-google-recaptcha";
type props = {
  onChange: (token: string | null) => void
}
const Recapthcha = ({onChange} : props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  

  const siteKey = import.meta.env.VITE_REACT_APP_SITE_KEY as string;

  return (
    <div>
      {/* {siteKey ? (
        <ReCAPTCHA sitekey={siteKey} onChange={onChange} />
      ) : (
        <p>Error: Site key is not set.</p>
      )} */}
    </div>
  );
};

export default Recapthcha;