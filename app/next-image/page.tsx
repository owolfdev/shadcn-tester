import Image from "next/image"

export default function Page() {
  return (
    <div>
      {/* <img src="profile.jpg" alt="test image" /> */}
      <Image
        src="/profile.jpg"
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  )
}
