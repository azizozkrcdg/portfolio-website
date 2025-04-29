import mongoose from "mongoose";

const CertificateSchema = new mongoose.Schema(
  {
    certificateName: {
      type: String,
      required: true,
    },
    certificateImage: {
      type: String,
      required: true,
    },
    certificateType: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Certificate = mongoose.model("Certificate", CertificateSchema);

export default Certificate;
