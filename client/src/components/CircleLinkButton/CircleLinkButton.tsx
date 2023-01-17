import './CircleLinkButton.css'

interface Props {
  siteLink: string;
  imageLink: string;
}

export default function CircleLinkButton({ siteLink, imageLink }: Props) {
  return (
    <div className='circle-main'>
        <img src={imageLink} />
    </div>
  );
}
