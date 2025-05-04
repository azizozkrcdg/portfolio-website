  import Certificate from "../../models/Certificate.js";

  const getCertificates = async (req, res) => {
    try {
      const certificates = await Certificate.find();

      res.render("admin/certificate", { certificates });
    } catch (error) {
      console.error("HATA:", error);
      res.status(500).json({ error: "Server Error", detail: error.message });
    }
  };

  const createCertificate = async (req, res) => {
    try {
      const { certificateName, certificateType } = req.body;
      const certificateImage = req.file ? `/uploads/${req.file.filename}` : "";

      const newCertificate = new Certificate({
        certificateName,
        certificateImage,
        certificateType,
      });

      await newCertificate.save();
      res.redirect("/admin/certificate");
    } catch (error) {
      console.error("HATA:", error);
      res.status(500).json({ error: "Server Error", detail: error.message });
    }
  };

  const deleteCertificate = async (req, res) => {
    try {
      const certificateId = req.params.id;
      const certificate = await Certificate.findByIdAndDelete(certificateId);

      if (!certificate) {
        return res
          .status(404)
          .json({ success: false, message: "Sertifika bulunamadı" });
      }

      // Başarıyla silindiğinde success: true döndür.
      res.json({ success: true, message: "Sertifika başarıyla silindi" });
    } catch (error) {
      console.error("HATA:", error);
      res
        .status(500)
        .json({ success: false, message: "Server Error", detail: error.message });
    }
  };

  const updateCertificate = async (req, res) => {
    try {
      const certificateId = req.params.id;
      const { certificateName, certificateType } = req.body;
      const certificateImage = req.file ? `/uploads/${req.file.filename}` : "";

      const updateCertificate = await Certificate.findByIdAndUpdate(
        certificateId,
        {
          certificateName,
          certificateImage,
          certificateType,
        },
        { new: true }
      );

      if (!updateCertificate) {
        return res
          .status(404)
          .json({ success: false, message: "Sertifika bulunamadı" });
      }

      res.redirect("/admin/certificate");
    } catch (error) {
      console.error("HATA:", error);
      res
        .status(500)
        .json({ success: false, message: "Server Error", detail: error.message });
    }
  };

  export default { getCertificates, createCertificate, deleteCertificate, updateCertificate };
