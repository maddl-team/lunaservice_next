import Image from "next/image";

const MADDL_LOGO_URL = "https://maddl.agency/app/uploads/2019/10/logo-maddl-footer.png";

export function AgencyCredit() {
  return (
    <p className="m-0 mt-3 text-center text-[11px] text-[rgba(255,255,255,0.45)]">
      Web Marketing Agency:{" "}
      <a
        href="https://maddl.agency/"
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="inline-flex items-center gap-2 transition-colors hover:text-[rgba(251,249,243,0.8)]"
      >
        MADDL Agency
        <Image
          src={MADDL_LOGO_URL}
          alt="Logo MADDL Agency"
          width={120}
          height={30}
          className="h-[30px] w-auto"
        />
      </a>
    </p>
  );
}
