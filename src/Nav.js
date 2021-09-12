import React, { useState } from "react";
import "./Nav.css";
import Modal from "./Modal";

const Nav = () => {
  const [modals, setModals] = useState(false);
  const signUp = (e) => {
    e.preventDefault();
    setModals(true);
  };
  const loggedIn = (e) => {
    e.preventDefault();
    setModals(false);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid d-flex justify-content-between">
          <div>
            <a className="navbar-brand" href="/">
              <img
                className="img1"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAdUAAABrCAMAAAAW0Oh0AAAA8FBMVEX///9JsFBcXV3O3TdZWlpUVVVGr01ArUhTVFRQUVFXWFhxcnI5q0Hy+fL19fWurq5duGPS0tJ8fX1ku2nl5eX39/fU69XY2Nijo6OZ0J294b/8/O+y3LWs2a/Q3kKcnZ3M3CTa5XfG5cjB2UiUzpiEyIhkZWU9rVHj8uT5++nj4+O3uLiEhYWOj490dXXK2xnGxsa1trZyv3ff6YTQ6tJ3wXtUtFr2+d3U4VKz1U1iu2iBx4bg8eHm7aHv9MTZ5W/199Hs8rmhzlLl7Zyy1E+v1V6bzEK12ICezlbZ5WeTylnk7JT3+d/W41vA2D0qqDSTFRtdAAASiklEQVR4nO2dC1fbxhLH/ZAlW36AjR9g7NghxjFgE+OAQ4IbSG5u2zRt8/2/zdXMaqV9r0jQob1n/+1pAT2Q96ednZ2dWQoFJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnJycnp3+jjt897OD/i4d3Z8/9LE5PoeOP3+5vy+/v4OvZ+/Lt/bdPx8/9TE4/peNP9+XptDx975/CtzP/yxS+v///BLvYLZr53b3ZXCzyvH9W/fm2PC2DvhQDpHoUFD/jD6blt++e++meWM3hZn+7PZgtFMd2/aza6W4+uzs42N/fP9icjvt2tBfL1bnxhPXh5KprPONquRoofnxGmZbfF1Oqr7+UKdc/DfdsnQ8knXd7Pd353b29lvEhBfW68t1b+tvb1dw0fFAQDKVDB43M+n6juPV402gEfqwgaBRn1+aHuaiFlbnh+Hm9Vgmr1UPDKevoFiW5SX+ZxkyjnspQLb7+XKZc/6O7ZWsS1lQK66u18g3r1qq1y0dgbddVty/VV1ft7Ddh1TyIPhrKD0bCsaNGMbsaJ8LVi5kf+Pw5Edl98TROHa9U8lQ9jag1D0ug2oX+FqvolJrU389elCnU1xzVYpFiLb/R/dZOtaSWF1a8juJx96ILavqPIaoderrbh6XVj4BFcqT5/UCwkLNAYped6mibXA09NQV7ozHWIEBS0SPbq8Qft67tCK3LqIWq0uGE6hd8CpZq0lt1VC90UFGht5L6KzxnLTuNjhpqfP/K8tFcF8WovYPt0R18wOCIP9hvBLJIq0hqbLlXonnT8AnEyDpvPxzsF8EWk2sbkqlPtI4aMJxoD8+hKwPZ2lp3ShehSyMSpUqgclQTrDqqSw8bV1RIe1gYik/zOKotvI98d8raqy3NnoQk+GD+QQRkCF9shc66O5I020btsJ1JPx9zl/aLAWG6nQ1jL6x5fbSJuTZOdY9zjkx0R7u16OjyKurP4Up3zrqmfC9iqmh+RarF4u9GqnV4lyaHoiarzryGI4InDvSPo9oFfHPx7pNldPsKIRuWtG+xUlvoqmA7m5voK0Mvomoe+EV/3+LMnhQRX/BhxHfg/g0xxcGd5sIWtGBNZ16hJ1eukK2W/ERtwwnVL3QcEKiS3mqiWlH5o61ue1lCrpU97sDjqXod1e0Hh5ceeW/CPfm4VtfYQ/HLMXy5sV6Rheo19snAHysO7WNLNmaaS8HaadtjQhwhfH918x9EIDsqSDWBKlIlWE1U5ZE61vmqhv4b98xPQxU1mITItfYIrOAPxaNpEx1egydDlIHqjkDdqCbAhcIpwaogDoL2qGgmLtCRwU9Cl0pjkrr4Zss/B6rU/CqoohH+IaqRM1UCKnN26HtCqtHHXuEAXs2MtQmW0o9JggkONI3NXGKlCmdEd7rRnYNt6Rf7yoNtHDrVF55XyJBpcqnamhaKqKY9VUU16q0/SLWwBv+NexWflGr0C0ror2UdW4dR//Rp+AD9paLtEjtVdKf1DhGdTH1QHmtVYdBUu3xX0bFqNGSez6FvqO+NfV3xVp+9YKEqqEZYf5Rq4RAnXMwZT0y1cO6h85/RE74BD4nGHhbgOTXUXSiVlepJYHKHUIS7GPMggulmqJ7Ad6gnhV+oP+JSPawWzv77mqNK1mz4+fivmse1UsUZF+uiPTXV6EWGZtHYMEE75JgQugvkKaskG9XmB18xRRLO2ffj+ZQs8IiqyjhEK/pkpIvqzymUuCHu0/3LWL9tWX6+jyGTvhD7+o2eff8Le087VYhTsJOtJ6daaKOVz2SDwe1letUJ2GPbpMVGdQTmNbCEe+E3ySFGFAxS6tkoDJlkOIXBV33OeY1toDMa+p1+4fD5NOR97fNYP9ML3rCr6Xaq3TnMONPvn54qWnn9fI5VMlklwi6kbutUFqroKgW6eUsiMAtqN/jc0w2aOGRiU7W0QUPoNKnf8pZC+vyah5p8xusih/X17zQm/JK5qZ0qmZClY0IOVHvgMWVxmPoNwVYeBbYR0Ur1GkdV9ZyG+9VB4KtnUfDae6pBs+MlxlU3epLQPv3o7yiiz1yH9ItMrOWaN8LpCg6z3pqBKs6kU4w5UC1cVfSzA1YIkfVVCWYzEgtVHJutXTVyuDcbjZVeat7JHmNcodVU87dW4lCBaFfV9lSQprdOmc6agSo+0Jr79qmpkrCb1Q1uogHmfF4M9at90+QqM1Vc+7GMqmbp4hAQ4KVzlkFF3Q7nbGj/OAtUCFkrsb5IF9EzUL2ocv5bHlRJLNQairhuSI4oifUbrzJT7acRyB/VoKq2NOAuJGuWGA+XG7rNxic+TW3mlz6zCuv0U3LCP4TqQOsjskJjyXssO/hYDaMJNlMdiUb98erC1KwkBdNbOKzStgUz7cnNxoX2X2bpqSDRCP+Br8NtcjyrBc6Zam+uD9AkIkEHgSBGDY1TVjNVHKrtCz8m9dCflFwhCPCmbyr6urI1qjOpFGdKqPHg8O6Xr7e3X7/FLlF/q+itb47Zuz6/t0RcwdCc1UUChKK1HQfa8EAsM9U7eFOsKwRmYYzhSvwpDqtJbxiUVGa6hYuR8Tcfp1rze/aSJKZNp/eEa9+XsaYm+B8xs6F3tcxtYHIqdasmfDpj1NBIlQT2rfMas9ZV1fiBCzXJi0ryWEQz3Q6Z5gEPWG1+P9Jkw5Sd6DJFRnj6jd42SxQCwKSPkw/VtWE9K9ZCPYs5tQ2MZqr7cPAnqeKquJShh6Nt+q1g8oiu2ND+Vwlq7Jt/LLOKse5kI/yVmuCMEUPGdORDtW1MAkGhrZWzPYdiZEKUmWrUNmYDnkUAcC6MH4MS/4nWVcV7C/25Gg+rx7eS+SU99bgsKDbCfG8t/l6+pVFDO9V63tF9FIbdjHEItJWq6CCGcQ3+jpkqRO03P0sV4QjjxwU/zS+0MCbBm+DePI0+Fd690DhK36YC1b/Iz0WX6Y8pnbFaqe7lvRJHBFlr3qXpjL4ukn+q7sOJzFRxvfZnqV5U5FXxZUSaSzeAgXXOu/lddsX94Vc+BdKPnQWpq5bfxPR2Wz6l8lcaNHz2VfNYSNUY4J/pInu4PNrQg7FTtQSS7Wornl764IcVqUPjdIe+DWcjXtQD/Ch21fKULrvthEuof2ChuocZLtxiQz5UC9qFj1hkeUbl65JFF32iy49SXZzwutb7VC0I8PMOLsRV+GF0LbsOXGhfJ8kAl6dvLZcYqbY7JBuNm2A/E9WhPrKHUUP92GilqvagT3whK9wvzrS/41JakuHChShcjeM+Yo8L7ev0VrLA3KqbSrrM0VZ3sFfHXGzP41+mnKhKH1nQjT6GtEN/SRtJ+EGqN1Jxh69PbcLAHxeHwPR5Hhig51bsuvMs68pvpb5aztJXvYmo1bIzr5IsbCkJ+3n6qilL1LLu/YMWeOOLVNPkRklrMY4Ns3xxpoZrO2xrtvnUw2Ne9Me/yBb4m+YS+iHrmOEnyYtLJrxaRwzOPg9VzWSVaGRcd8ngAytv2hANsGEC1RVzHdpVsfOS1TjOUwYrnU4aH15wekU9hXcy1Y/xoeF77pIy/XndUNzkVSodeSjPh2rPTLV3g/PK0VipGba4LtHFTDXQzmxO+LKcjSpeSUXigUwHAJMsJh52MeebGe4uuSrJdy84dK+KMdbjW4lqfMUweMXPeB7iA1qqYcWbT9qKEfdZZja7uLRJIziojRqaqRazRiHMizuiNyuEC5mTUvQ9WEmfJ00s0Hu1bcRuxCehs9KJzSh4zVOdsrGlElcvTIZT73CtWUHJh2rXHIXIUpcq1rJS2SOGH36e6hU/REKoTA6AYtJ3apYHQl7PV4GqT73Dew7r9Ct53GHgC1S5iGF43k01uKpD7Yu+JPM5IoY4WbVJVx5nj+5bEp+IzFQHXAIoBm/EECLJEmVYXwhZ+/wU5tU2SWo8/spgncbsIqhFgeo9vVNdXh9qdQCrvF4YK8fovvZNItn1hj0esBBG40wZqfZguPR/nmqhyiVrw7CqKIKbe6xPxYb2QbylBapFaoTT2c30njjHY3DfeKrTZJsIVRSih1h1mZz5UBXfW15ktW2o1zgwT3z0q+Zwa2tRB8hCtcNmsGDUviM7JQA7cY96dY8vTDuTqSYTtoeXL6aRXtzHbu6IbCXAU6UusDq2RJZUQ3XCST5UD413NTCLZYgaZshwsdbVFaxUMcpL7VtXXT5ODDN7krdk0B9/lammmeV/Pnz8+EAXZYbxTgI81eRO6ohhG4NK6p1a8qGKyVq6DBeombCUH4/1U1Yz1aFlxSeRhSpEeRPH4ErTRpgnSltDXnDl4g0x1cQIsxrHziNPNY0jauLA4K2VKkrvJReqZCFOFxG987UFaVQLnLIq03rNVHeq3SVUwlFAX/wBxYylSvwNJreoPg06p3H3nEih/TMVVUWcdET3H+KpJgZYG92fANZQlXKSC1Up4sZqgXNVS8MfaOPElizvom+klQgjiIYBmElUxxJz5YfGeHHceIrQ/l8qqlJ5zyjdRoCleptubahdsyETWYXHlAvVlb4SUFGHoRKWxxVV7CxUZxlNsK0cksmHGGhdv3aazt9NyiBTsUupKVXBCI/TuTtLdcrUOmqpktRlxa5feVDFujvtgqAyt1DUQlseZ6HaxyRFa+7ozra1CFPchjV+yiZClMRDaivyJ9hABEOVM0IjZvs3lirTVQ3rq+2SujovD6qH2hLQQtzsgfU3aXMNbfWrGOC1Zu+Pbb7yeerSQqPOlRs19tIFur1KSd6Qh+msLFXGCI/YKBtDle2qplXzC1gyl2vAc6Dagvmx+uUuxKkt9poJbXmcjSopOLbYAizcMuYNYwUYAmuF+jhZ2noQ2i9JpvDlm2msv7lac7ox0JjbqPH13/TsaZm9iykXYoU7tYlGIgeqkLil30IA3ZkMRWv7mvI4674QGF6yZHpnGNsxdg+Y1hW9k4CJL9ikNS60nyhZKxXyfUlvHfG7bzb68nIsyES1B60tWYmnp0rSGHUbXp7IhXBq4ZRVsc+KlSrWJfsHpr1t+0X74JtsxoLDqm7uTSsehcCx4rF5qiTIJKxy6MrGjHlLJMYkeExPTnUNpqiqjQGfZtnRA4TlcYpEF/vOPDNMkTGsxy0Cxdh7fc1fQDde6l3CvEbXpphQem4LkRZypIoeQMkrcaHDp6aKw7d+aZUUwmUqb9JEDTPsorUhvVUbqcAdXPhbNDe+v+UeC9O4I++ya9yF9CJOc5lQe619qNyoFi4wzr/ML3O0hasb3lz7+bDgwlx2TDVS2+oMO94tsMIs2FcHGU6wfYVZE2ysJexIMSf+D0QC9emgA7LMCckT3txU2pkjVRJjqrBv3pNSXc9xTJWXIhN9sG8RQKXZVCvL7pQ7rFnxG6fyabtT3DdYdJJP5QrLCYlDoNekb1KSJdGtCqF9SXlSxXGA26fi6ah2r+Y1DHUYEp132Iky1qydKtP7M+0kG9esBNvZjj2zuTsl+wZLI/upnIRMdivEYdVQW0Kgr6UkcOmx86TawnerkmIkVHsmMZfHVPnjrVa3uz68nMe5qXND9vrYvu9DKvWmWpmoFnbbODWqsTkaItlmfzg7ILmFvrzTkoIqFh7XYV3G5AbhhgzrQ2vWfq5U4xhTOgQAVe9y2TFokt6Q7PosnH1Zn1fpps+lat3kM2yz7ewcq6isW85EtdAkljbeov37d8iwoDu0K6L/CqoYh/DmniGiUqAtAiFSc9Z+vlRxPaUUJk4q2JloumNS9TLprj2S2yYqTU4tmc0Q9r7MRcNHqllQRqpRV98X/0JGTPlO8QCKcRWNK+kDhhYlQUOj308eO1+qZNvRxAb3UiZ6pd1vGerP8irzQ/MOH72o9z1ih5V+4PtSz4ad3LMVHjfHxUAAG3Vc9V8+mSmKewY18rlqxjd1HZ9lcBFBi21go+p/11DthCWvarx7pEuu6PaiqvljJolCxmU/L1Xks6PeGlaqtc6FdeOs/v6jaobHW18OWJxExjTDAio5d4Y1ofSPFDU+HGmWVPuNQB5tL6JxxQtrK/OfYJrUQjjLvF9ChPWuEZio+o2Nbrl34NW065qJWpe1GuPHDlZzD54L/g3Jf8l/yBdhWGeHlS49OyT/Rv+U5vXlZE+VQi6r+biKYeXpi5NHbPzQ3I2O7m42m83N6dHQ8NtPNhs54jGYdDor64aM7VV0VoZpxPWNH+ioBsHBif7huheW/XBArTWPoGWWgCvDKU5q9U/jCh+OKliRu5/apM/pmXVydBBEgwJZipvBV8H+bPgP+IOTTj+lZvN6NLtDcz++m42vHzkoOTk5OTk5OTk5OTk5OTk5OTk5/fv1P239zYm37FWnAAAAAElFTkSuQmCC"
                alt=""
              />
            </a>
          </div>
          <div>
            <form className="d-flex">
              <input
                className="form-control my-3 navinput"
                type="search"
                placeholder="Search for your favorite groups in ATG"
                aria-label="Search"
              />
            </form>
          </div>
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Create Account
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      className="dropdown-item"
                      style={{ marginLeft: "2px" }}
                      href="/"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={signUp}
                    >
                      Sign Up
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={loggedIn}
                    >
                      Login
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {modals ? <Modal toggle="true" /> : <Modal toggle="" />}
    </>
  );
};

export default Nav;
