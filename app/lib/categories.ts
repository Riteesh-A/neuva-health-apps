type ProductDetail = {
  title: string;
  price: string;
  imageUrl: string;
};

type ProductCategory = {
  slug: string;
  heroTitle: string;
  heroSubTitle: string;
  heroDescription: string;
  products: ProductDetail[];
};

export const categories: ProductCategory[] = [
  {
    slug: "have-better-sex",
    heroTitle: "Extend Your Performance with Clinically-Proven Solutions",
    heroSubTitle: "Reliable Performance when it matters most",
    heroDescription:
      "Daily treatments for spontaneous intimacy without planning.",
    products: [
      {
        title: "Tadalafil (Cialis)",
        price: "₹599",
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/d3d0/3109/1f0b6bc1d5a9be6e9425bf709f2037e3?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oXYEC~whVUMDiTUaWo74S909X3RrMynuxOO-ndKN4aFysKGXiSEIAkfj2PuOrV0qMjegXYUcJfXNdi7BrUrHqRPhFI6lPnewJBNYoFmli5epdsRrwMMYHHnVg4-LzFIAfUL32sv6Mja~rSR2VFNfapwW89-QoqmM0a5L5Vs6yEfbqEdswpBrllwSTYx5cISbC1czgETxtVrOAx9G3KzW1ftX0vUrCltMEKgIyJD4G7~~SA02vYt9GFliU8LgvQcAnymw-8bbiVOpjqMMGsDq94-0K3Wmr-g~Nb3MJcZHeUgwqSvz11qk5O8qHWbJ-NoF0mxn4pYBQpZ81TnfAZ9vJQ__",
      },
      {
        title: "Sildenafil (Viagra)",
        price: "₹599",
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/bcec/e5f3/3504e308c902c45005701b23df5d1b34?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=irmt7GSETkohw~nW9F5eSBiRqH-rS6edk3nQSwnylvZkQu9IO3OCKBU6m5ufG0JAy58D9U2Cg4vPrp6GMwMrlLU-1hpwJFi6hGTSWBLs5dFA3UXyvF6tw1TYAnXcQSDefh8eZ9yla7TPIb2rjIzM5w1dCp5BPO5XIXT5Pim0ANOonPxeqQqiBAcGaaMkjtVROdeRq0ckoQhTMyD2R88KJo3pwfvVn215cXlpgxh7kPmxwkaR3PgJ-GEo-~s2xNYKuxmSO35hb5Oyj~tHyKuWjvT6y6hqEiFFGN23B1uMmsdnYC1vC1hrKAsCD9ir7RFEcYIoHeG91KtNS9hVMB3wOg__",
      },
    ],
  },
  {
    slug: "lose-weight",
    heroTitle: "Manage Weight with Science-Backed Medication",
    heroSubTitle: "Achieve your weight goals with clinical support",
    heroDescription: "Daily medications that fit seamlessly into your routine.",
    products: [
      {
        title: "Tirzepatide (Mounjaro)",
        price: "₹599",
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/d3d0/3109/1f0b6bc1d5a9be6e9425bf709f2037e3?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oXYEC~whVUMDiTUaWo74S909X3RrMynuxOO-ndKN4aFysKGXiSEIAkfj2PuOrV0qMjegXYUcJfXNdi7BrUrHqRPhFI6lPnewJBNYoFmli5epdsRrwMMYHHnVg4-LzFIAfUL32sv6Mja~rSR2VFNfapwW89-QoqmM0a5L5Vs6yEfbqEdswpBrllwSTYx5cISbC1czgETxtVrOAx9G3KzW1ftX0vUrCltMEKgIyJD4G7~~SA02vYt9GFliU8LgvQcAnymw-8bbiVOpjqMMGsDq94-0K3Wmr-g~Nb3MJcZHeUgwqSvz11qk5O8qHWbJ-NoF0mxn4pYBQpZ81TnfAZ9vJQ__",
      },
      {
        title: "L-Carnitine",
        price: "₹599",
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/bcec/e5f3/3504e308c902c45005701b23df5d1b34?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=irmt7GSETkohw~nW9F5eSBiRqH-rS6edk3nQSwnylvZkQu9IO3OCKBU6m5ufG0JAy58D9U2Cg4vPrp6GMwMrlLU-1hpwJFi6hGTSWBLs5dFA3UXyvF6tw1TYAnXcQSDefh8eZ9yla7TPIb2rjIzM5w1dCp5BPO5XIXT5Pim0ANOonPxeqQqiBAcGaaMkjtVROdeRq0ckoQhTMyD2R88KJo3pwfvVn215cXlpgxh7kPmxwkaR3PgJ-GEo-~s2xNYKuxmSO35hb5Oyj~tHyKuWjvT6y6hqEiFFGN23B1uMmsdnYC1vC1hrKAsCD9ir7RFEcYIoHeG91KtNS9hVMB3wOg__",
      },
    ],
  },
  {
    slug: "tackle-anxiety",
    heroTitle: "Reduce Anxiety with Proven Treatments",
    heroSubTitle: "Find calm and clarity when you need it most",
    heroDescription:
      "Daily treatments to help manage symptoms and improve wellbeing.",
    products: [
      {
        title: "Sertraline (Daxid)",
        price: "₹599",
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/d3d0/3109/1f0b6bc1d5a9be6e9425bf709f2037e3?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oXYEC~whVUMDiTUaWo74S909X3RrMynuxOO-ndKN4aFysKGXiSEIAkfj2PuOrV0qMjegXYUcJfXNdi7BrUrHqRPhFI6lPnewJBNYoFmli5epdsRrwMMYHHnVg4-LzFIAfUL32sv6Mja~rSR2VFNfapwW89-QoqmM0a5L5Vs6yEfbqEdswpBrllwSTYx5cISbC1czgETxtVrOAx9G3KzW1ftX0vUrCltMEKgIyJD4G7~~SA02vYt9GFliU8LgvQcAnymw-8bbiVOpjqMMGsDq94-0K3Wmr-g~Nb3MJcZHeUgwqSvz11qk5O8qHWbJ-NoF0mxn4pYBQpZ81TnfAZ9vJQ__",
      },
      {
        title: "Escitalopram (Nexito)",
        price: "₹599",
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/7f8b/68df/19287b11c98486fa4df9491a0b181e59?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=l6wCJ7AX1L-eHNHnzrGcOMnDIW8gOYs-~ZFwCnKTBygSVaSsHAkY0q0yN7L-TckmZO-nQ-wd9HzAn2a32eOQPtyO-mfY6nira6bB9yvgCMrSgLupKU8u3wU4LfU9F3RtcgKu7C-qNvVJKKYZ2F5Tx7tAGt-01Ki2bHK1hzmRkn1BrIjkjdqijpDVHwv7ABMqkER3NSbYY3C3~XqCjnSzvfcSUya1po2xHgRZKFxLxc5HVEJovnu5FFMBW9qZFe0Un75fYuBAwGXUKg-xPCX7XEeX6IDylMRANTN0zgbTVdL~i5yTKUgMC9S2XSgrUpTMf9ARnrTgDJuVRotdNFPVsA__",
      },
    ],
  },
  {
    slug: "regrow-hair",
    heroTitle: "Restore Hair with Scientifically-Proven Treatments",
    heroSubTitle: "Revitalize your hairline with visible, proven results",
    heroDescription:
      "Daily treatments to help manage symptoms and improve wellbeing.",
    products: [
      {
        title: "Minoxidil",
        price: "₹599",
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/d3d0/3109/1f0b6bc1d5a9be6e9425bf709f2037e3?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oXYEC~whVUMDiTUaWo74S909X3RrMynuxOO-ndKN4aFysKGXiSEIAkfj2PuOrV0qMjegXYUcJfXNdi7BrUrHqRPhFI6lPnewJBNYoFmli5epdsRrwMMYHHnVg4-LzFIAfUL32sv6Mja~rSR2VFNfapwW89-QoqmM0a5L5Vs6yEfbqEdswpBrllwSTYx5cISbC1czgETxtVrOAx9G3KzW1ftX0vUrCltMEKgIyJD4G7~~SA02vYt9GFliU8LgvQcAnymw-8bbiVOpjqMMGsDq94-0K3Wmr-g~Nb3MJcZHeUgwqSvz11qk5O8qHWbJ-NoF0mxn4pYBQpZ81TnfAZ9vJQ__",
      },
      {
        title: "Finasteride",
        price: "₹599",
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/d3d0/3109/1f0b6bc1d5a9be6e9425bf709f2037e3?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=oXYEC~whVUMDiTUaWo74S909X3RrMynuxOO-ndKN4aFysKGXiSEIAkfj2PuOrV0qMjegXYUcJfXNdi7BrUrHqRPhFI6lPnewJBNYoFmli5epdsRrwMMYHHnVg4-LzFIAfUL32sv6Mja~rSR2VFNfapwW89-QoqmM0a5L5Vs6yEfbqEdswpBrllwSTYx5cISbC1czgETxtVrOAx9G3KzW1ftX0vUrCltMEKgIyJD4G7~~SA02vYt9GFliU8LgvQcAnymw-8bbiVOpjqMMGsDq94-0K3Wmr-g~Nb3MJcZHeUgwqSvz11qk5O8qHWbJ-NoF0mxn4pYBQpZ81TnfAZ9vJQ__",
      },
      {
        title: "Minoxidil + Finasteride Topical Solution",
        price: "₹599",
        imageUrl:
          "https://s3-alpha-sig.figma.com/img/7f8b/68df/19287b11c98486fa4df9491a0b181e59?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=l6wCJ7AX1L-eHNHnzrGcOMnDIW8gOYs-~ZFwCnKTBygSVaSsHAkY0q0yN7L-TckmZO-nQ-wd9HzAn2a32eOQPtyO-mfY6nira6bB9yvgCMrSgLupKU8u3wU4LfU9F3RtcgKu7C-qNvVJKKYZ2F5Tx7tAGt-01Ki2bHK1hzmRkn1BrIjkjdqijpDVHwv7ABMqkER3NSbYY3C3~XqCjnSzvfcSUya1po2xHgRZKFxLxc5HVEJovnu5FFMBW9qZFe0Un75fYuBAwGXUKg-xPCX7XEeX6IDylMRANTN0zgbTVdL~i5yTKUgMC9S2XSgrUpTMf9ARnrTgDJuVRotdNFPVsA__",
      },
    ],
  },
];
