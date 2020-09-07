using System;
using System.Collections.Generic;
using System.Security.Cryptography.X509Certificates;
using System.Text;

namespace Azure.B2C.Function.Procedures
{
    public static class CertValidation
    {
        public static string certHeader = "";
        public static string errorString = "";
        public static X509Certificate2 certificate = null;
        public static string certThumbprint = "";
        public static string certSubject = "";
        public static string certIssuer = "";
        public static string certSignatureAlg = "";
        public static string certIssueDate = "";
        public static string certExpiryDate = "";
        public static bool isValidCert = false;

        public static bool ClientCertIsValid(string certHeader)
        {
            if (!string.IsNullOrEmpty(certHeader))
            {
                try
                {
                    byte[] clientCertBytes = Convert.FromBase64String(certHeader);
                    certificate = new X509Certificate2(clientCertBytes);
                    certSubject = certificate.Subject;
                    certIssuer = certificate.Issuer;
                    certThumbprint = certificate.Thumbprint;
                    certSignatureAlg = certificate.SignatureAlgorithm.FriendlyName;
                    certIssueDate = certificate.NotBefore.ToShortDateString() + " " + certificate.NotBefore.ToShortTimeString();
                    certExpiryDate = certificate.NotAfter.ToShortDateString() + " " + certificate.NotAfter.ToShortTimeString();
                }
                catch (Exception ex)
                {
                    errorString = ex.ToString();
                }
                finally
                {
                    isValidCert = ClientCertIsValid();
                }
            }

            return isValidCert;
        }

        private static bool ClientCertIsValid()
        {
            if (certificate == null || !string.IsNullOrEmpty(errorString)) return false;

            if (DateTime.Compare(DateTime.Now, certificate.NotBefore) < 0 || DateTime.Compare(DateTime.Now, certificate.NotAfter) > 0) return false;

            bool foundSubject = false;
            string[] certSubjectData = certificate.Subject.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries);
            foreach (string s in certSubjectData)
            {
                if (string.Compare(s.Trim(), Environment.GetEnvironmentVariable("CERT_SUBJECT")) == 0)
                {
                    foundSubject = true;
                    break;
                }
            }
            if (!foundSubject) return false;

            bool foundIssuerCN = false, foundIssuerO = false;
            string[] certIssuerData = certificate.Issuer.Split(new char[] { ',' }, StringSplitOptions.RemoveEmptyEntries);
            foreach (string s in certIssuerData)
            {
                if (string.Compare(s.Trim(), Environment.GetEnvironmentVariable("CERT_ISSUER")) == 0)
                {
                    foundIssuerCN = true;
                    if (foundIssuerO) break;
                }

                if (string.Compare(s.Trim(), Environment.GetEnvironmentVariable("CERT_ISSUER")) == 0)
                {
                    foundIssuerO = true;
                    if (foundIssuerCN) break;
                }
            }

            if (!foundIssuerCN || !foundIssuerO) return false;

            if (string.Compare(certificate.Thumbprint.Trim().ToUpper(), Environment.GetEnvironmentVariable("CERT_THUMBPRINT")) != 0) return false;

            return true;
        }
    }
}
